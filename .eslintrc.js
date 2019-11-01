module.exports = {
    "env": {
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "object-curly-newline": ["error", {
          "ObjectExpression": "always",
          "ObjectPattern": { "multiline": true },
          "ImportDeclaration": "never",
          "ExportDeclaration": { "multiline": true, "minProperties": 3 }
      }]
    }
};