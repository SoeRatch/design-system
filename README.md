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

## compiling scss to css 

- install
```
cd scss
yarn add --dev node-sass
```

- make build file inside src folder
```
cd scss/src
mkdir scripts
cd scripts
touch build.js
```
- make lib folder to output the css file - global.css
```
cd scss/src
mkdir lib
```
- and in package.json -

```javascript
{
  
"scripts": {
    "build": "node src/scripts/build.js"
  },

}

```


## MONO REPOSITORY STRATEGY 

- move scss to packages
```
mkdir packages
mv scss packages/
```

- new npm roject at root 

```
yarn init -y
```

- install lerna 
** Lerna is a fast modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository. **
It helps publish our packages to npm very easily . 

```
yarn add --dev lerna 
```

- initialize a new lerna project 
```
yarn lerna init 
```
it will create a lerna.json file 

- modify lerna.json 
```javascript
{
  "packages": [
    "packages/*"
  ],
  "useWorkspaces": true,
  "npmClient": "yarn",
  "version": "0.0.0",
  "stream":true
}

```

- modify root package.json
```javascript
{
  
"workspaces": {
    "packages":[
      "packages/*"
    ],
    "nohoist": [
      "**/normalize-scss"
    ]
  },
  "private":true
}

```

- now when you run yarn , it will install root packages as well as all the packages inside packages folder in the top root . 
```
yarn 
```
* check the packages in root node_modules *


- use lerna to run specific script in all of our packages . for eg , in root package.json 

```javascript
{
  
"scripts": {
    "build": "yarn lerna run build"
  },

}

```
* most of our packages will have build step and one build command will run all the build step inside all packages *
 
```
yarn build
```

## REACT Package

- make react package
```
cd packages
mkdir react
```

- initialize react package
```
cd packages/react
yarn init -y
```

- install dev dependencies 

```
yarn add --dev react @types/react typescript
```

- create tsconfig.json for typescript and paste in the basic configuration 
```
touch tsconfig.json
```

- create src folder
```
mkdir src 
```

- create atoms, molecules and foundation inside src folder
```
cd src
mkdir atoms
mkdir molecules
mkdir foundation 
```

## Build the package for production to a suitable format so that we can ship to NPM 

- install a bundler called rollup 

```
cd packages/react
yarn add --dev rollup rollup-plugin-typescript2
```
- create rollup.config.js file
```
touch rollup.config.js
```

- add build script in package.json
```javascript
{
  
"scripts":{
    "build":"rollup -c "
  }

}

```

- run yarn build and it will compile src/index.ts file to lib folder 
```
yarn build 
```

## React Playground

- react playground won't be published . 

- make react playground in root folder
```
mkdir playgrounds
```

- modify root package.json
```javascript
{
  
"workspaces": {
    "packages":[
      "packages/*",
      "playgrounds/*"
    ],
    .
    .
  },
}

```


- make react playground
```
cd playgrounds
mkdir react
```

- initialize react playgrounds
```
cd playgrounds/react
yarn init -y
```

- install dev dependencies 

```
yarn add --dev react @types/react typescript parcel-bundler
yarn add --dev react-dom @types/react-dom
```

- add dev script in playgrounds/react/package.json
```javascript
{
  
"scripts": {
    "dev":"parcel src/index.html -p 3000"
  }
}

```

- run dev
```
yarn dev 
```
it will create a dist folder and run on port 3000 
