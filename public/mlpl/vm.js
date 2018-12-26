/* eslint-env browser */

function initVm(root) {
  // Create app object to serve as namespace.
  const vmFactory = root.mlpl.vmFactory || {};

  root.mlpl.vmFactory = vmFactory; //eslint-disable-line

  vmFactory.getVm = function getVm() {
    const vm = {};

    vm.execute = function execute(assembly) {
      console.log(assembly);
    };
  };
}

initVm(window);
