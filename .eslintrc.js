module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "describe" : "readonly",
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "test" : "readonly",
        "expect" : "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
};