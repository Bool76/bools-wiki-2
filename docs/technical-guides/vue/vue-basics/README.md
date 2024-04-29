# Vue | Basics

<br>

### Table of Contents
1. Files
1. Directories
1. .Vue File Types
1. How the Vue app is created / runs

<br><br>

## Files 

**package.json** - Identifies project dependencies and other project information
- Name of project
- Version of Vue
- CLI dependencies such as eslint
- Defined scripts that can be used in the project
- and more...

<br>

**package-lock.json** - File created from running `npm install` which installs the project in your environment. As you know this is build from the package.json file.

<br>

**babel.config.js** [optional] - Babel config file. Babel is a tool that transforms modern Javascript dev features into Javascript that web browsers understand 

<br>

**index.html** - Found in the public directory. It's the only html type file you'll have in your Vue application (NOTE: You are building a single pag application so there's only one html file). In this file you have a `div` with the code:
```
<div id="app"></div> 
```
This code mounts the the app.vue file

<br>

**App.vue** - File that could be considered the root of your Vue app. It's the file that will load and will tie in other Vue components. "App.vue" could also be called a component.

<br><br>

## Directory Structure

**node_modules** - Directory that houses all dependencies that were installed. It's created or populated when you run `vue create` or `npm install`

<br>

**public** - Contains static assets. When first created it will contain the favicon image and the index.html file. Though this is NOT used for image assets like logos or product images. 

<br>

**src** - Source directory. Where the majority of the work occurs in a Vue project. Includes an "assets" and "components" directory

**src/assets** - Typically where you're going to store static assets used by components

<br><br>

## .Vue File Types

Overview - A single Vue file is called a component. Vue files are responsible for a portion of the UI you see on a web page. Since a browser doesn't know what a .vue file is, the Vue build process will parse all .vue files and their blocks into files that a browser will understand. 

<br>

### Contains 3 Blocks

1. `<script>`
1. `<template>`
1. `<style>`

<br>

#### Script
Where logic, functionality, and data is handled. It's like the Javascript for the UI.

<br>

#### Template
Is like the html portion of the UI. It's the piece that is displayed on a page.

<br>

#### Style
Where styles are defined for the UI created in the `<template>` block

<br><br>

## How the Vue app is created / runs
1. index.html runs in the browser
1. index.html contains the root dom node: `<div id="app"></div>`
1. The "main.js" file runs
1. In "main.js" two imparitive imports are happening
    1. `import { createApp } from 'vue'`
    1. `import App from './App.vue'`
1. The `createApp` function is utilized and is used to mount the app component on the dom node
1. `App` is passed into the `createApp()` function: `createApp(App)`
1. The `App`component is then mounted on to the dom node `#id`: `createApp(App).mount('#app')`
1. Remember that `#app` was identified in the index.html file: `<div id="app"></div>`
1. The `App` component then contains html, scripts, and styles