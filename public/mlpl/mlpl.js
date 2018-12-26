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
  const mlpl = root.mlpl || {};

  root.mlpl = mlpl; //eslint-disable-line

  mlpl.run = function run(code) {
    console.log(code);

    const assembly = [
      '0:    LD 6, 0(0)',
      '1:    ST 0, 0(0)',
      '2: PRINT Enter positive number',
      '3:    IN 0, 0, 0',
      '4:    ST 0, 0(5)',
      '5:   LDC 0, 0(0)',
      '6:    ST 0, 0(6)',
      '7:    LD 0, 0(5)',
      '8:    LD 1, 0(6)',
      '9:   SUB 0, 1, 0',
      '10:   JLT 0, 2(7)',
      '11:   LDC 0, 0(0)',
      '12:   LDA 7, 1(7)',
      '13:   LDC 0, 1(0)',
      '15:   LDC 0, 1(0)',
      '16:    ST 0, 1(5)',
      '17:    LD 0, 1(5)',
      '18:    ST 0, 0(6)',
      '19:    LD 0, 0(5)',
      '20:    LD 1, 0(6)',
      '21:   MUL 0, 1, 0',
      '22:    ST 0, 1(5)',
      '23:    LD 0, 0(5)',
      '24:    ST 0, 0(6)',
      '25:   LDC 0, 1(0)',
      '26:    LD 1, 0(6)',
      '27:   SUB 0, 1, 0',
      '28:    ST 0, 0(5)',
      '29:    LD 0, 0(5)',
      '30:    ST 0, 0(6)',
      '31:   LDC 0, 0(0)',
      '32:    LD 1, 0(6)',
      '33:   SUB 0, 1, 0',
      '34:   JEQ 0, 2(7)',
      '35:   LDC 0, 0(0)',
      '36:   LDA 7, 1(7)',
      '37:   LDC 0, 1(0)',
      '38:   JEQ 0, -22(7)',
      '39: PRINT Factorial for entered number is',
      '40:    LD 0, 1(5)',
      '41:   OUT 0, 0, 0',
      '14:   JEQ 0, 28(7)',
      '43: PRINT You entered non-positive number',
      '42:   LDA 7, 1(7)',
      '44: PRINT Program exited',
      '45:  HALT 0, 0, 0'
    ];

    const vm = mlpl.vmFactory.getVm();
    vm.execute(assembly);
  };
}

init(window);
