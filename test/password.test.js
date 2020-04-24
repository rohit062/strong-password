let pass = require('../lib/password');

pass = new pass();

console.log(pass.generate({length: 2}));