const conf = {
    "env": {
      "browser": true,
      "es6": true
    },
    "plugins": [
      "fp"
    ],
    "parserOptions": {
      "ecmaVersion": 2018
    },
    "rules": {
      "fp/no-arguments": "error",
      "fp/no-class": "error",
      "fp/no-delete": "error",
      "fp/no-events": "error",
      "fp/no-get-set": "error",
      "fp/no-let": "error",
      "fp/no-loops": "error",
      "fp/no-mutating-assign": "error",
      "fp/no-mutating-methods": "error",
      "fp/no-mutation": "error",
//    "fp/no-nil": "error",   * Skip. Normally, we want to disallow methods without return statements, but in this example I am a bit lazy
      "fp/no-proxy": "error",
      "fp/no-rest-parameters": "error",
      "fp/no-this": "error",
      "fp/no-throw": "error",
//    "fp/no-unused-expression": "error",   Skip. We want to be able to use some methods without return statements, such as console.log
      "fp/no-valueof-field": "error",
      "no-var": "error"
    }
}

// eslint-disable-next-line fp/no-mutation
module.exports = conf;