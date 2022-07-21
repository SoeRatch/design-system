# Design-system

- scss folder will contain all of the styles 

- scss/src/foundation will have the style guide for our design system .

- install VS Code CSS Comments for writing better comments in scss files . 

- install SCSS IntelliSense to autocomplete scss variables in other files . 

** css resets:** normalize scss is a great package . it makes browser element render consistently .

## Setup scss npm package 

```
  cd scss
  yarn init -y
```

```
cd scss
yarn add normalize-scss
```

## Style linter and formatting 

Every part of the codebase needs to be consistent with order so , 
to make scss  scalable and maintainable ** install the following: **


1. Stylelint - focuses on how the code works , eg mixins , functions, includes , use of variables , etc .

2. Preetier - focusses on formatting , eg indentation, spaces, etc 


```
cd scss
yarn add --dev stylelint stylelint-config-sass-guidelines stylelint-config-prettier stylelint-prettier prettier

touch .stylelintrc.json 
```

*stylelint-config-sass-guidelines:* recommends best practices .

*stylelint-config-prettier:* turn off all stylelint rules related to formatiing because stylelint can also format and we are giving prettier to format .

*stylelint-prettier:* run prettier as a lintin rule and provides error when necessary .

*prettier:* prettier package .

**To detect **, run : 
```
yarn lint
```
and **to fix** run 

```
yarn lint:fix
```

after creating lint & lint:fix in script section of package.json

## Git hooks - husky 

Automate the process of running ** lint:fix ** on the code after the developer is done working.

Install 2 packages :
1. Husky 
2. lint-staged 

```
cd scss
yarn add --dev husky@4 lint-staged
```

and in package.json -

```javascript
{
  
"husky":{
    "hooks":{
      "pre-commit":"lint-staged"
    }
  },

  "lint-staged":{
    "*.scss":"yarn lint:fix"
  }

}

```

** lint-staged uses husky to run commands only on files that we staged before commits ** 