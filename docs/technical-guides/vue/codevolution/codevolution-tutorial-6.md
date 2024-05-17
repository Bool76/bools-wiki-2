# Codevolution | Tutorial 6 Notes


## HTML Binding

HTML Binding or binding HTML is the process to which HTML is rendered in the `<template>` block. This is also done through an html attribute that's placed in an html tag which is specifically for Vue. It's called:

```
v-html
```
<br>

*Example*
```
<template>
  <div>
    <div v-text="name"></div>
    <div v-html="music"></div>
  </div>


</template>

<script>
  export default {
    name: 'App',
    data() {
      return{
        name: "Ian Gall",
        music: "<i>Ian Gall likes The Doors</i>"
      }
    }
  }
</script>
```
<br>

> :warning: **Warning** Be careful about rendering html this way as it can be an openning for cross site scripting