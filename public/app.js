/* eslint-env browser */

let editor;
let terminal;

const proxy = URL.createObjectURL(new Blob(
  [
    `
  self.MonacoEnvironment = {
    baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'
  };
  importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
  `
  ],
  { type: 'text/javascript' }
));
require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@0.8.3/min/vs' } });
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

function getSampleCode() {
  console.log(document.URL);
  return `
# Sample program in MLPL language - computes factorial #

write 'Enter positive number';
read x; # input an integer #
if 0 < x then # don't compute if x <= 0 #
factorial := 1;
repeat
  factorial := factorial * x;
  x := x - 1;
until x = 0
write 'Factorial for entered number is';
write factorial;  # output factorial of x #
else
write 'You entered non-positive number';
end
write 'Program exited';
  `;
}

require(['vs/editor/editor.main'], () => {
  // Register a new language
  monaco.languages.register({ id: 'mlpl' });

  // Register a tokens provider for the language
  monaco.languages.setMonarchTokensProvider('mlpl', {
    tokenizer: {
      root: [[/#(.*?)#/, 'mlpl-comment'], [/'(.*?)'/, 'mlpl-string'], [/\[[a-zA-Z]+\]/, 'mlpl-reserved']]
    }
  });

  // Define a new theme that contains only rules that match this language
  monaco.editor.defineTheme('mlplTheme', {
    base: 'vs',
    inherit: false,
    rules: [{ token: 'mlpl-comment', foreground: 'FFA500' }, { token: 'mlpl-string', foreground: 'a31515' }, { token: 'mlpl-reserved', foreground: '333333' }]
  });

  editor = monaco.editor.create(document.getElementById('container'), {
    value: getSampleCode(),
    theme: 'mlplTheme',
    language: 'mlpl'
  });

  $(window).on('resize', () => editor.layout());
});

function initTerminal() {
  const $terminal = $('#terminal');
  terminal = $terminal.terminal(
    (command) => {
      if (command !== '') {
        terminal.echo(`command: ${command}`);
      }
    },
    {
      greetings: 'MLPL Interpreter',
      name: 'mlpl_demo',
      prompt: 'mlpl> '
    }
  );

  $.fn.confirm = async function confirm(message) {
    const term = $(this).terminal();
    const response = await new Promise((resolve, reject) => {
      term.push(
        (command) => {
          try {
            resolve(parseInt(command, 10));
          } catch (err) {
            reject(err);
          }
        },
        {
          prompt: message
        }
      );
    });
    term.pop();
    return response;
  };
}

function runCode() {
  const code = editor.getValue();
  const result = mlpl.run(code, terminal);

  if (!result.completed && typeof result.regIndex !== 'undefined') {
    terminal
      .confirm('-> ')
      .then((command) => {
        if (command) {
          mlpl.execute(result, command, terminal);
        }
      })
      .catch((err) => {
        terminal.error(err);
      });

    setTimeout(() => {
      terminal.focus();
    });
  }
}

function init() {
  initTerminal();
  $('#runBtn').on('click', e => runCode(e));
}

init();
