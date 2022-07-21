# design-system

scss folder will contain all of the styles 

scss/src/foundation will have the style guide for our design system .

install VS Code CSS Comments for writing better comments in scss files . 

install SCSS IntelliSense to autocomplete scss variables in other files . 

css resets : normalize scss is a great package . it makes browser element render consistently .

## setup scss npm package 

```bash
  cd scss
  yarn init -y
```

```
cd scss
yarn add normalize-scss

```



Every part of the codebase needs to be consistent with order so , 
to make scss  scalable and maintainable


1 Stylelint - focuses on how the code works , eg mixins , functions, includes , use of variables , etc .

2 Preetier - focusses on formatting , eg indentation, spaces, etc 

## install the following : 

```
cd scss
yarn add --dev stylelint stylelint-config-sass-guidelines stylelint-config-prettier stylelint-prettier prettier

touch .stylelintrc.json 

```

stylelint-config-sass-guidelines : recommends best practices .

stylelint-config-prettier : turn off all stylelint rules related to formatiing because stylelint can also format and we are giving prettier to format .

stylelint-prettier: run prettier as a lintin rule and provides error when necessary .

prettier: prettier package .

To detect , run : 
```
yarn lint
```
and to fix run 

```
yarn lint:fix
```

after creating lint & lint:fix in script section of package.json



