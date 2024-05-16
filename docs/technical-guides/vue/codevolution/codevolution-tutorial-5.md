# Codevolution | Tutorial 5 Notes


## Binding Data to the Template

Two different ways
1. Mustache
1. Directive


## Binding Data w/ Mustache


You want to bind the data to the html

Bind the `name` property to the html

Use mustache syntax!

<br><br>

### How to

```
{{name-of-property}}
```

<br>


*Example*
```
<template>
  <div>
      {{name}}
  </div>
</template>

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

`name` from the data object is a property of data

<br><br>

### More than one Mustache

You can utilize more than one call to a property with the use of the mustache syntax

*Example*

```
<template>
  <div>
      Name: {{name}}<br>
      Car: {{car}}
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return{
        name: "Ian Gall",
        car: "Mustang Foxbody"
      }
    }
  }
</script>
```

> :memo: **Note:** Don't forget to use the key term "binding"!

<br><br>


## Binding Data w/ Directive

Add a `v-text` attribute to an html tag with the value of the name of the property you want to use. You're going to leave the container of the div tag empty


*Example*
```
<template>
  <div v-text="name"></div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return{
        name: "Ian Gall",
      }
    }
  }
</script>
```

**Con**  
You can only place in the value of the property in the html tag. So if you wanted some sort of static value I would go with the mustache

If you did have a static value in between the html tags, it will throw an error because you suck

<br>

> :memo: **Note:** Fo what it's worth `v-text` is not used very often!