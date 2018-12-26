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

    vm.stepRESULT = {};
    vm.stepRESULT.srOKAY = 1;
    vm.stepRESULT.srHALT = 2;
    vm.stepRESULT.srIMEM_ERR = 3;
    vm.stepRESULT.srDMEM_ERR = 4;
    vm.stepRESULT.srZERODIVIDE = 5;

    vm.mem = {};
    vm.mem.iMem = new Array(vm.iaddrSize).fill(0);
    vm.mem.dMem = new Array(vm.daddrSize).fill(0);
    vm.mem.reg = new Array(vm.noRegs).fill(0);

    vm.loadCode = function loadCode(assembly, terminal) {
      let lineNo = 0;
      let loc = 0;
      let op = 0;
      let argsSlice = [];
      let arg1 = 0;
      let arg2 = 0;
      let arg3 = 0;
      let args = '';
      let args1 = '';
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

      for (let index = 0; index < assembly.length; index += 1) {
        const inst = assembly[index];
        lineNo = +1;

        const instSlice = inst.trim(' ').split(':');
        if (instSlice < 2) {
          terminal.error(`Missing colon on line: ${lineNo}\n`);
          return false;
        }

        loc = parseInt(instSlice[0].trim(' '), 10);

        if (Number.isNaN(loc)) {
          terminal.error(`Invalid memory location ${instSlice[0]} on line: ${lineNo}\n`);
          return false;
        }

        if (loc > vm.iaddrSize) {
          terminal.error(`To large memory location ${instSlice[0]} on line: ${lineNo}\n`);
          return false;
        }

        const opValue = instSlice[1].trim(' ');
        const opIndex = opValue.indexOf(' ');

        if (opIndex === -1) {
          terminal.error(`Missing opcode on location ${instSlice[0]} on line: ${lineNo}\n`);
          return false;
        }

        const opCodeKey = opValue.slice(0, opIndex);
        args = opValue.slice(opIndex + 1, opIndex.length).trim(' ');
        op = opcodeMap.get(opCodeKey);

        if (!op) {
          terminal.error(`Invalid opcode on location ${instSlice[0]} on line: ${lineNo}\n`);
          return false;
        }

        switch (op) {
          case vm.opcode.opHALT:
          case vm.opcode.opIN:
          case vm.opcode.opOUT:
          case vm.opcode.opADD:
          case vm.opcode.opSUB:
          case vm.opcode.opMUL:
          case vm.opcode.opDIV: {
            argsSlice = args.split(',');

            if (argsSlice.length > 3) {
              terminal.error(`Invalid number of arguments on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            arg1 = parseInt(argsSlice[0].trim(' '), 10);
            if (Number.isNaN(arg1)) {
              terminal.error(`Invalid first argument on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            arg2 = parseInt(argsSlice[1].trim(' '), 10);
            if (Number.isNaN(arg2)) {
              terminal.error(`Invalid second argument on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            arg3 = parseInt(argsSlice[2].trim(' '), 10);
            if (Number.isNaN(arg3)) {
              terminal.error(`Invalid third argument on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            vm.mem.iMem[loc] = {
              iop: op,
              iarg1: arg1,
              iarg2: arg2,
              iarg3: arg3
            };

            break;
          }
          case vm.opcode.opLD:
          case vm.opcode.opST:
          case vm.opcode.opLDA:
          case vm.opcode.opLDC:
          case vm.opcode.opJLT:
          case vm.opcode.opJLE:
          case vm.opcode.opJGT:
          case vm.opcode.opJGE:
          case vm.opcode.opJEQ:
          case vm.opcode.opJNE: {
            const argsSlice1 = args.split(',');
            if (argsSlice1.length !== 2) {
              terminal.error(`Invalid number of arguments on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            const argsSlice2 = argsSlice1[1].split('(');
            if (argsSlice2.length !== 2) {
              terminal.error(`Invalid number of arguments on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            arg1 = parseInt(argsSlice1[0].trim(' '), 10);
            if (Number.isNaN(arg1)) {
              terminal.error(`Invalid first argument on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            arg2 = parseInt(argsSlice2[0].trim(' '), 10);
            if (Number.isNaN(arg2)) {
              terminal.error(`Invalid second argument on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            arg3 = parseInt(argsSlice2[1].trim(')'), 10);
            if (Number.isNaN(arg3)) {
              terminal.error(`Invalid third argument on location ${instSlice[0]} on line: ${lineNo}\n`);
              return false;
            }

            break;
          }
          case vm.opcode.opPRNT:
            args1 = args;
            break;
          default:
            return false;
        }

        vm.mem.iMem[loc] = {
          iop: op,
          iarg1: arg1,
          iarg2: arg2,
          iarg3: arg3,
          iargs1: args1
        };
      }

      return true;
    };

    vm.executeCode = function executeCode(terminal) {
      while (true) {
        let r = 0;
        let s = 0;
        let t = 0;
        let m = 0;
        let str = '';
        const pc = vm.mem.reg[vm.pcReg];

        if (pc < 0 || pc > vm.iaddrSize) {
          terminal.error(`Invalid program counter value: ${pc}`);
          return;
        }

        vm.mem.reg[vm.pcReg] = pc + 1;
        const inst = vm.mem.iMem[pc];

        // Setup instruction arguments
        switch (inst.iop) {
          case vm.opcode.opHALT:
          case vm.opcode.opIN:
          case vm.opcode.opOUT:
          case vm.opcode.opADD:
          case vm.opcode.opSUB:
          case vm.opcode.opMUL:
          case vm.opcode.opDIV:
            r = inst.iarg1;
            s = inst.iarg2;
            t = inst.iarg3;
            break;
          case vm.opcode.opLD:
          case vm.opcode.opST:
            r = inst.iarg1;
            s = inst.iarg3;
            m = inst.iarg2 + vm.mem.reg[s];

            if (m < 0 || m > vm.daddrSize) {
              terminal.error(`Invalid memory address value: ${m}`);
              return;
            }

            break;
          case vm.opcode.opLDA:
          case vm.opcode.opLDC:
          case vm.opcode.opJLT:
          case vm.opcode.opJLE:
          case vm.opcode.opJGT:
          case vm.opcode.opJGE:
          case vm.opcode.opJEQ:
          case vm.opcode.opJNE:
            r = inst.iarg1;
            s = inst.iarg3;
            m = inst.iarg2 + vm.mem.reg[s];

            break;
          case vm.opcode.opPRNT:
            str = inst.iargs1;
            break;
          default:
            return;
        }

        // Execute instruction
        switch (inst.iop) {
          case vm.opcode.opHALT:
            return;
          case vm.opcode.opPRNT:
            terminal.echo(str);
            break;
          case vm.opcode.opIN: {
            const num = 5;
            vm.mem.reg[r] = num;
            break;
          }
          case vm.opcode.opOUT:
            terminal.echo(vm.mem.reg[r]);
            break;
          case vm.opcode.opADD:
            vm.mem.reg[r] = vm.mem.reg[s] + vm.mem.reg[t];
            break;
          case vm.opcode.opSUB:
            vm.mem.reg[r] = vm.mem.reg[s] - vm.mem.reg[t];
            break;
          case vm.opcode.opMUL:
            vm.mem.reg[r] = vm.mem.reg[s] * vm.mem.reg[t];
            break;
          case vm.opcode.opDIV:
            if (vm.mem.reg[t] === 0) {
              terminal.echo('Division with zero.');
              return;
            }
            vm.mem.reg[r] = vm.mem.reg[s] / vm.mem.reg[t];
            break;
          case vm.opcode.opLD:
            vm.mem.reg[r] = vm.mem.dMem[m];
            break;
          case vm.opcode.opST:
            vm.mem.dMem[m] = vm.mem.reg[r];
            break;
          case vm.opcode.opLDA:
            vm.mem.reg[r] = m;
            break;
          case vm.opcode.opLDC:
            vm.mem.reg[r] = inst.iarg2;
            break;
          case vm.opcode.opJLT:
            if (vm.mem.reg[r] < 0) {
              vm.mem.reg[vm.pcReg] = m;
            }
            break;
          case vm.opcode.opJLE:
            if (vm.mem.reg[r] <= 0) {
              vm.mem.reg[vm.pcReg] = m;
            }
            break;
          case vm.opcode.opJGT:
            if (vm.mem.reg[r] > 0) {
              vm.mem.reg[vm.pcReg] = m;
            }
            break;
          case vm.opcode.opJGE:
            if (vm.mem.reg[r] >= 0) {
              vm.mem.reg[vm.pcReg] = m;
            }
            break;
          case vm.opcode.opJEQ:
            if (vm.mem.reg[r] === 0) {
              vm.mem.reg[vm.pcReg] = m;
            }
            break;
          case vm.opcode.opJNE:
            if (vm.mem.reg[r] !== 0) {
              vm.mem.reg[vm.pcReg] = m;
            }
            break;
          default:
            return;
        }
      }
    };

    vm.execute = function execute(assembly, terminal) {
      if (this.loadCode(assembly, terminal)) {
        this.executeCode(terminal);
      }
    };

    return vm;
  };
}

initVm(window);
