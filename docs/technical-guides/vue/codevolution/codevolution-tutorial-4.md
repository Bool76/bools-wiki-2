# Codevolution | Tutorial 4 Notes


"vue" file - Also called a single file component. So when you hear someone talk about a Vue component then they are talking about a `.vue` file

### Sections of a Vue File

1. `<template>` - html code

1. `<script>` - Javascript. Logic for the component is controlled. 

1. `<style>` - CSS 


--- 

<br><br>

The default object that is exported from the `<script>` block can contain a property called `data` which is a function

```
<script>
  export default {
    name: 'App',
    data() {
      return{
        name: "Ian Ball",
      }
    }
  }
</script>
```
`<script>` == Contains a default object

`data` == Is a property (and also a function) that by default is available in `<script>` 

It's an object that returns the data that can be used by the `<template>` block. 

**A great deal of Vue work is wiring up data from the `<script>` block and presenting it in the `<template>` block**


