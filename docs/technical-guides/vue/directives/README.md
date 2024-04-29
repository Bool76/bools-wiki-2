# Vue | Directives


**What are Vue Directives?**  
Vue directives create dynamic and reactive user interfaces. Vue directives are special HTML attributes with the prefix `v-` which gives the HTML tag extra dynamtic functionality. 


### List of Directives

| Vue Directive | What does it do                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| v-bind        | Connects an attribute in an html tag to a dynamic value                                                       |
| v-if          | Places a condition on an html tag                                                                             |
| v-on          | Tells browser to perform an action                                                                            |
| v-for         | Vue's version of a foreach loop                                                                               |
| v-model       | Creates a two way binding between input and Vue Data. Commonly used with `<input>`, `<form>`, `<button>` tags |

<br>

### v-bind

**Shortcut** - Use a colon before the term you want to bind a dynamic value to it

```vue
<button :title="clearButtonTitle">
```
`:title` == The colon before "title" indicates that you bind some sort of dynamic value to it
