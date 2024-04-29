# Vue | Vue File Types

<br><br>

## Random Facts
1. Vue file types are typically referred to as "components"
1. Vue files are almost always found in the src/components directory (w/ exception of the "App.vue" file)
1. Vue file types are main composed of 3 block types:
    1. `<script>`
    1. `<template>`
    1. `<style>`
1. Much of the purpose of the Vue file is wiring up the data and logic to the markup (`<template>`). Connecting data in the `<script>` block to the HTML in the `<template>` block.


<br><br>

## Block Types
Vue files are mainly composed of 3 block types
1. `<script>`
1. `<template>`
1. `<style>`

<br>

### Script
Where logic, functionality, and data is handled. It's like the Javascript for the UI.

<br>

#### How is data handled in the `<script>` block?

There is a `default` object that's exported in the `<script>` block:  
```
export default {
  name: 'App',
}
```
That `default` object  contains a property called `data` - Which is a function and you can call on it to use it:
```
export default {
  name: 'App',
  data() {
    return
    name: "Ian Gall"
  }
}
```

`data()` returns an object. That holds data that can be used by the `<template>` block

<br>

#### How to access the data in Template block? 
You have to let Vue know how you want to bind your data to the HTML.



<br><br>

### Template
Is like the html portion of the UI. It's the piece that is displayed on a page.

<br><br>

### Style
Where styles are defined for the UI created in the `<template>` block