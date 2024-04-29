# VS Code | Prettier

Overview - How to setup Prettier on a project in the package and some helpful ways to use Prettier

<br><br>

### Mis Notes (to be cleaned up later)

We might want to consider setting a specific version so that it doesn't get upgraded and change something about our code formatting unexpectedly

VS Code Extension - Prettier Code formatter

Set Pettier as the VS Code detaul formatter

In VS Code, in the configuration / settings - Seems like there are settings right there you can set. But I also thought that you could set them in some sort of Prettier config?

"Format on Save" - We might want to set this as a default

You can select some files to ignore (and directories?). `.prettierignore`
- Needs to be located in the root of the project directory
- `*.html` for example would ignore all html files. This could be useful

<br>

`prettierrc` file - A way to set formatting styles and not have it in your package.json
- Written in a json format
- If you save it as a `js` file such as `prettierrc.js` then it can be in Javascript format
Here's an example of what the file can look like:

```
{
    "semi": false
}
```

I'm sure that there are many other setting that you'll have to look up 

> :warning: **Warning:** The local `prettierrc` file will override any setting that's in VS Code

You can setup `overrides` which can be used as acceptions to your Prettier rules



<br><br>

### Config Related Questions
1. What version of Prettier should we use?
1. How should we configure ([Link to Config Options](https://prettier.io/docs/en/options.html)):
    1. semicolon at the end?
    1. Single or double quotes
    1. TrailingComma - Do you want to remove any trailing comma?


<br><br>

### General Questions

1. How do we make sure that FE developers install Prettier Extension as part of the process of setting up their environment or installing VS Code?
1. What version of Prettier do we want to use?
1. Should we install Prettier as a dev dependency? Seems like we should given my above comment about selecting a version.

<br><br>

### Scripts

| Code           | Title                                   | Description |
| -------------- | --------------------------------------- | ----------- |
| npm run format | Formats all files in your project       |             |
| _tbd_          | Format specific files                   |             |
| _tbd_          | Run manual check on files / directories |             |
