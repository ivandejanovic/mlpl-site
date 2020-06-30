/* eslint-env browser */

(function initCompiler(root) {
  // Create mlpl object to serve as namespace.
  const compiler = root.mlpl.compiler || {};

  root.mlpl.compiler = compiler; //eslint-disable-line

  compiler.compile = function compile(code) {
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

    return assembly;
  };
}(window));
