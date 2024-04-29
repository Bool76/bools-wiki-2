# Vue | Components


### Main Parts of a Component
(also the order in which they should appear)
1. Template
1. Script
1. Script Setup
1. Style

<br>

**File Type?**  
.vue file


### Vue Built-in Elements
1. Template
1. Component
1. Slot

<br>

### Template Element

Should be the first section you see in a Vue component. It uses the html tag `<template>` which signifies that code within it will be reused. The top-level `<template>` element is a structural requirement for .vue files. The top level `<template>` element doesn't allow for Vue directives to be used in it (e.g. v-if, v-model, v-for).


> :memo: **Note:** Additional `<template>` elements can be used inside of the top level `<template>`. Vue directive can be used w/ the inner level `<template>` elements

<br><br>

*Example*
```
<template>
    <div class="s-button">
        <button class="button" @click="onClick">
            <slot></slot>
        </button>
        <a class="button-link">
            {{label}}
            <slot></slot>
      </a>
    </div>
</template>
```
<br><br>

### Script Section

Currently I'm seeing that it can mainly define the name of the component

*Example*
```
<script>
  export default {
    name: "SramDrawer",
  };
</script>
```
