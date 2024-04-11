const { RuleTester } = require('eslint');
const rule = require('./sort-vars-alphabetical');

const ruleTester = new RuleTester();

const error = { messageId: 'incorrectOrder' };

ruleTester.run('sort-vars-alphabetical', rule, {
  valid: [
    {
      code: 'const apple = 1;\nconst banana = 2;\nconst cherry = 3;',
    },
    {
      code: 'const _1 = 1;\nconst _a = 2;\nconst a = 3;',
    },
    {
      code: 'let _a = 1;\nlet a = 2;\nlet c = 3;',
    },
    {
      code: 'var x = 1;\nvar y = 2;\nvar z = 3;',
    },
    {
      code: 'var x = 1;\nlet y = 2;\nconst z = 3;',
    },
    {
      code: 'var b = 1; let c = 2; const z = 3;',
    },
    {
      code: 'let a, b, c = 3',
    },
  ],
  invalid: [
    {
      code: 'const banana = 2;\nconst apple = 1;',
      errors: [error],
    },
    {
      code: 'let c = 3;\nlet a = 1;\nlet b = 2;',
      errors: [error],
    },
    {
      code: 'let b, c, a = 3',
      errors: [error],
    },
    {
      code: 'var y = 2;\nvar x = 1;\nvar z = 3;',
      errors: [error],
    },
    {
      code: 'const _a = 1;\nconst _1 = 2;\nconst a = 3;',
      errors: [error],
    },
    {
      code: 'let a = 1;\nlet _a = 2;\nlet c = 3;',
      errors: [error],
    },
    {
      code: 'var b = 1; let a = 2; const z = 3;',
      errors: [error],
    },
  ],
});
