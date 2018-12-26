/* eslint-env browser */

function init(root) {
  // Create app object to serve as namespace.
  const mlpl = root.mlpl || {};

  mlpl.run = function run(code) {
    console.log(code);
  };
}

init(window);
