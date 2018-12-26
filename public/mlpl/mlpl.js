/* eslint-env browser */
/* eslint-disable */

let proxy = URL.createObjectURL(new Blob([`
  self.MonacoEnvironment = {
    baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'
  };
  importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
  `], { type: 'text/javascript' }));
require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@0.8.3/min/vs' }});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

require(['vs/editor/editor.main'], () => {
	let editor = monaco.editor.create(document.getElementById('container'), {
    value: `
# Sample program
in MLPL language -
computes factorial
#
write "Enter positive number";
read x; # input an integer #
if 0 < x then # don't compute if x <= 0 #
factorial := 1;
repeat
  factorial := factorial * x;
  x := x - 1;
until x = 0
write "Factorial for entered number is";
write factorial;  # output factorial of x #
else
write "You entered non-positive number";
end
write "Program exited";
    `,
		theme: 'vs'
	});
	
	editor.addListener('didType', () => {
		console.log(editor.getValue());
	});
});

jQuery(function($, undefined) {
  $('#console').terminal(function(command) {
    if (command !== '') {
        var result = window.eval(command);
        if (result != undefined) {
            this.echo(String(result));
        }
    }
  }, {
      greetings: 'MLPL Interpreter',
      name: 'mlpl_demo',
      prompt: 'mlpl> '
  });
});

function init(root) {
  // Create app object to serve as namespace.
  const mlpl = root.mlpl || {};

  mlpl.run = function run(code) {
    console.log(code);
  };
}

init(window);
