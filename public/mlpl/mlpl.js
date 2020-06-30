/* eslint-env browser */

(function initMLPL(root) {
  // Create mlpl object to serve as namespace
  const mlpl = root.mlpl || {};

  mlpl.run = function run(code, terminal) {
    const assembly = this.compiler.compile(code);
    this.vm = this.vmFactory.getVm();
    return this.vm.execute(assembly, terminal);
  };

  mlpl.execute = function execute(result, command, terminal) {
    this.vm.mem.reg[result.regIndex] = command;
    this.vm.executeCode(terminal);
  };

  root.mlpl = mlpl; //eslint-disable-line
}(window));
