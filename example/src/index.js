async function loadwasm() {
  const lib = await require('./lib.rs');
  lib.hello();
  console.log(lib.doub(21));
}

loadwasm();

// const wasm = require('./lib.rs');

// wasm.then(module => {
//   console.log('Calling rust functions!');
//   module.hello();
//   console.log(module.doub(21));
// })
