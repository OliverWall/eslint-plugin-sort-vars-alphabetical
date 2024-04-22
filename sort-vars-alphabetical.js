module.exports = {
  meta: {
    type: 'suggest',
    docs: {
      category: 'Stylistic Issues',
      recommended: true,
    },
    fixable: false,
    schema: [],
    messages: {
      incorrectOrder: 'var, let and const должны быть объявлены в алфавитном порядке',
    }
  },

  create(context) {
    let previousVarName = null;

    return {
      VariableDeclaration(node) {
        node.declarations.forEach(declaration => {
          const currentVariableName = declaration.id.name;

          if (
              previousVarName &&
              previousVarName.localeCompare(currentVariableName) > 0
          ) {
            context.report({
              node: declaration,
              messageId: 'incorrectOrder',
            });
          }

          previousVarName = currentVariableName;
        });
      },
    };
  },
};
