# Eslint - Coding Style Standards

In  this course, we will be using the great `eslint` linter. Code linting is one of the great tools to enforce code style standards and code uniformity.

> ESLint is an open source project originally created by [Nicholas C. Zakas](http://nczonline.net/) in June 2013. Its goal is to provide a pluggable linting utility for JavaScript. Read more about it [here](https://eslint.org/)

## Setup in your projects
1. run the following command to install relevant eslint modules:
```
npm install --save-dev eslint eslint-plugin-react eslint-config-react eslint-plugin-react-native eslint-config-react-native prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-jest eslint-plugin-import
```
2. create a `.eslintrc` file as follows
[You may copy the one in this repository's root](https://raw.githubusercontent.com/zivl/mobile-app-development-s21/master/.eslintrc)

3. run `eslint` from the command line to make sure everything works well.
```
npx eslint .
```

For your convenient, feel free to add a `lint` script in your `scripts` section in your project's `package.json`

for example
```json
"scripts": {
    "lint": "eslint --cache --fix --format codeframe --ext .js ."
}
```
