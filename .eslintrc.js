module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:nuxt/recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "vue",
        "nuxt",
    ],
    "rules": {
        "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "comma-dangle": [
        2,
        "always-multiline",
        ],
        "no-unused-vars": 0, // 사용하지 않는 변수
        "no-useless-escape": 0, // 정규식
        "no-new": 0,
        "no-multi-spaces": 1,
        "camelcase": 1,
        "no-undef": 2,
        "new-cap": 0,
        "space-infix-ops": 1,
        "no-trailing-spaces": 1,
    },
    // eslint: {
    //     extend(config) {
    //         // 해당 모듈은 Eslint 에서 체크하지 않도록 설정합니다.
    //         config.ignorePatterns.push('**/*.vue')
    //         // 해당 변수를 Eslint 에서 사용하지 않는 변수로 설정합니다.
    //         config.rules['no-unused-vars'] = 'off'
    //     }
    // }
};
