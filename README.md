![Node.js CI](https://github.com/shermam/sanduicheiche/workflows/Node.js%20CI/badge.svg?branch=main)

# sanduicheiche

This is a small code example that solves the problem in the table below.
The idea is to have this function that takes in values from the first column as input and return values from the second column as output respectively.

| Input         | Output    |
|---------------|-----------|
| sanduicheiche | sanduiche |
| barrilarril   | barril    |
| ratoato       | rato      |
| sol           | sol       |
| coliseueu     | coliseu   |
| queijoijo     | queijo    |
| astroastro    | astro     |
| a             | a         |
| bananaana     | banana    |

# Solution

This is the solution I came up with:

```js
const removeEcho = (word) => word.replace(/(\w{2,})\1$/, "$1");
```

# Running

I assume `node` is already installed. And I am using `jest` for the tests here. So to run:
1. `git clone` this repo
1. run `yarn` to install `jest` dependencies (this assumes that you have `yarn` globally installed. `npm` should also work)
1. run `yarn test` to run the tests. (again `npm` should probably work as well)
