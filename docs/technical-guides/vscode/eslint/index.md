# VS Code | Eslint

Overview - Eslint will catch and alert coding errors, Javascript logic issues, or standards you set

**Eslint Auto Formatting**  
Yes it can do auto formatting. How? If in VS Code you have "Format on Save" checked and you have Eslint selected as your Formatter, then VS Code will read the `eslintrc` file and us it. However... it seems like we (at the SRAM Front End team) are going to use Prettier instead.

<br>

## Eslint Files

#### .eslintrc

Overview - Config file for Eslint

_Example_

```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```

#### .eslintignore

Overview - File to be used to identify files, file types, and directories you don't want to assess

<br>

#### package.json

Overview - Add to the script section so you have a script where you can run Eslint

_Example_

```
{
  "scripts": {
    ...
    "lint": "eslint . --ext .ts",
  }
}
```

<br><br>

## Eslint Rules


<br>

### Rule Levels

**Off (value of 0)** - Turns rule completely off  

**Warning (value of 1)** - Turns the rule on but won't make the linter fail

**Fail (value of 2)** - Turns the rule on and will make the linter fail

> :memo: **Note:** The values won't come into play if your `eslintrc` file is a Javascript file

<br>

### Setting Rules

Where? `.eslintrc`

Create a `rules` attribute and place rule settings in that section  

Link to common eslint rules:    [HERE](https://eslint.org/docs/latest/rules/)

_Example_
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": { 
    "no-console": 2 // Remember, this means error!
  }
}
```
<br>

If you run the linter w/ that rule and it fails it will look something like this:  
```
/simple-typescript-starter/src/index.ts

  2:1  error  Unexpected console statement  no-console
    ✖ 1 problem (1 error, 0 warnings) 
```
<br>

> :memo: **Note:** There's a popular list of rules that people tend to use and that's from AirBnb

<br><br>

## Scripts

| Code         | Title      | Description |
| ------------ | ---------- | ----------- |
| npm run lint | Run linter |             |


<br><br>

## General Questions / Comments

1. Save as a dev dependency? When you dont want it to run in production (or Stage?) `npm install --save-dev eslint`
1. How do we want to run it locally? 
    1. Manually run script?
    1. Can we even do it on save?
1. Should we also be using the Eslint VS Code extension? If so... is that something that we somehow make people us in addition to Eslint in our package.json? Or no?
1. Error Lens - Another extension that might be useful. Seems like it will add errors directly on the file and on the lines where the issue is otherwise you'll just see errors in your terminal. NOTE - I don't know if that's true or not.
1. We might want to start off small and NOT use something like AirBnb just so we can get more gradular if we'd like
