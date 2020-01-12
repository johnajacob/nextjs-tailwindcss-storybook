module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "prettier"
    ],
    "rules": {
        "global-require": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "no-debugger": 0,
        "no-alert": 0,
        "no-console": 0,
        "no-await-in-loop": 0,
        "no-underscore-dangle": 0,
        "no-return-assign": [
            "error",
            "except-parens"
        ],
        "no-restricted-syntax": [
            2,
            "ForInStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "no-unused-vars": [
            1,
            {
                "ignoreSiblings": true,
                "argsIgnorePattern": "res|next|^err"
            }
        ],
        "no-unused-expressions": [
            2,
            {
                "allowTaggedTemplates": true
            }
        ],
        "no-param-reassign": [
            2,
            {
                "props": false
            }
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "all",
            }
        ],
        "arrow-body-style": [
            2,
            "as-needed"
        ],
        "import/prefer-default-export": 0,
        "import": 0,
        "import/extensions": 0,
        "func-names": 0,
        "space-before-function-paren": 0,
        "comma-dangle": 0,
        "max-len": 0,
        "consistent-return": 0,
        "react/display-name": 1,
        "react/no-array-index-key": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-props-no-spreading": 1,
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0,
        "react/no-unescaped-entities": 0,
        "react/require-default-props": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "radix": 0,
        "no-shadow": [
            2,
            {
                "hoist": "all",
                "allow": [
                    "resolve",
                    "reject",
                    "done",
                    "next",
                    "err",
                    "error"
                ]
            }
        ],
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "semi": false,
                "singleQuote": true,
                "printWidth": 120,
            }
        ],
        "jsx-a11y/accessible-emoji": 0,
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                "aspects": [
                    "invalidHref"
                ]
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        
    }
};