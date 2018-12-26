/* eslint-env browser */

function initVm(root) {
  // Create app object to serve as namespace.
  const vmFactory = root.mlpl.vmFactory || {};

  root.mlpl.vmFactory = vmFactory; //eslint-disable-line

  vmFactory.getVm = function getVm() {
    const vm = {};

    vm.iaddrSize = 4096;
    vm.daddrSize = 4096;
    vm.noRegs = 8;
    vm.pcReg = 7;

    vm.oppclass = {};
    vm.oppclass.opcLRR = 1;
    vm.oppclass.opclRM = 2;
    vm.oppclass.opcLRA = 3;

    vm.opcode = {};
    vm.opcode.opHALT = 1;
    vm.opcode.opPRNT = 2;
    vm.opcode.opIN = 3;
    vm.opcode.opOUT = 4;
    vm.opcode.opADD = 5;
    vm.opcode.opSUB = 6;
    vm.opcode.opMUL = 7;
    vm.opcode.opDIV = 8;
    vm.opcode.opLD = 9;
    vm.opcode.opST = 10;
    vm.opcode.opLDA = 11;
    vm.opcode.opLDC = 12;
    vm.opcode.opJLT = 13;
    vm.opcode.opJLE = 14;
    vm.opcode.opJGT = 15;
    vm.opcode.opJGE = 16;
    vm.opcode.opJEQ = 17;
    vm.opcode.opJNE = 18;

    vm.stepRESULT.srOKAY = 1;
    vm.stepRESULT.srHALT = 2;
    vm.stepRESULT.srIMEM_ERR = 3;
    vm.stepRESULT.srDMEM_ERR = 4;
    vm.stepRESULT.srZERODIVIDE = 5;

    vm.mem.iMem = new Array(vm.iaddrSize);
    vm.mem.dMem = new Array(vm.daddrSize);
    vm.mem.reg = new Array(vm.noRegs);

    vm.loadCode = function loadCode(assembly) {
      let lineNo = 0;
      let loc = 0;
      const op = 0;
      const arg1 = 0;
      const arg2 = 0;
      const arg3 = 0;
      const args = '';
      const ok = true;
      const opcodeMap = new Map();

      opcodeMap.set('HALT', vm.opcode.opHALT);
      opcodeMap.set('PRINT', vm.opcode.opPRNT);
      opcodeMap.set('IN', vm.opcode.opIN);
      opcodeMap.set('OUT', vm.opcode.opOUT);
      opcodeMap.set('ADD', vm.opcode.opADD);
      opcodeMap.set('SUB', vm.opcode.opSUB);
      opcodeMap.set('MUL', vm.opcode.opMUL);
      opcodeMap.set('DIV', vm.opcode.opDIV);
      opcodeMap.set('LD', vm.opcode.opLD);
      opcodeMap.set('ST', vm.opcode.opST);
      opcodeMap.set('LDA', vm.opcode.opLDA);
      opcodeMap.set('LDC', vm.opcode.opLDC);
      opcodeMap.set('JLT', vm.opcode.opJLT);
      opcodeMap.set('JLE', vm.opcode.opJLE);
      opcodeMap.set('JGT', vm.opcode.opJGT);
      opcodeMap.set('JGE', vm.opcode.opJGE);
      opcodeMap.set('JEQ', vm.opcode.opJEQ);
      opcodeMap.set('JNE', vm.opcode.opJNE);

      assembly.forEach((inst) => {
        lineNo = +1;

        const instSlice = inst.trim(' ').split(':');
        if (instSlice < 2) {
          console.log(`Missing colon on line: ${lineNo}\n`);
          return false;
        }

        loc = parseInt(instSlice[0].trim(' '), 10);

        if (loc.isNan()) {
          console.log(`Invalid memory location ${instSlice[0]} on line: ${lineNo}\n`);
          return false;
        }

        if (loc > vm.iaddrSize) {
          console.log(`To large memory location ${instSlice[0]} on line: ${lineNo}\n`);
          return false;
        }

        const opValue = instSlice[1].trim(' ');
        const opIndex = opValue.indexOf(' ');

        if (opIndex === -1) {
          console.log(`Missing opcode on location ${instSlice[0]} on line: ${lineNo}\n`);
          return false;
        }

        return true;
      });
    };

    vm.executeCode = function executeCode() {};

    vm.execute = function execute(assembly) {
      if (!this.loadCode(assembly)) {
        this.executeCode();
      }
    };

    return vm;
  };
}

initVm(window);
