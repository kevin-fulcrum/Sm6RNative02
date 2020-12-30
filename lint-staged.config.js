module.exports = {
  '*.+(js|jsx)': [
    'eslint',
    // 'jest --findRelatedTests',
  ],
  '*.+(js|jsx|json|yml|yaml|css|kess|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
    'eslint --fix',
    'git add',
  ],
};
