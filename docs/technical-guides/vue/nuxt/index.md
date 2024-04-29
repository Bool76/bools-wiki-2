# Vue | Nuxt

Overview - General notes and helpful details about Nuxt

### General Notes

- "Reactive" - If something is reactive then when that variable or object changes then it will automatically change throughout the application
- v-model is a way to connect things. I know that's a generic explanation. You are binding two things. It's also a way to update values. 
```
If you click this thing - Then this value should update
```
- Square Brackets - Another way to think of their usage is that they interpert values. This is a JS thing. 
```
v-model=query[key]
```
- You might want to look into what are the other ways that you can interpert values in JS - Maybe even look at your JQuery book
- Think abut how you want to always write to your "reactive" variables throughout because those will update throughout Nuxt
- "Hydration" is a term that's used in JS that refers to sort of preloading things on a page
- `.length` is a property that doesn't exist for an Object. BUT... for an array it does exist
```
arrayExample.length
```
- In Vue you need to list out or define if there's going to be an emit event (as in an event you'd want to listen for)
- `scoped` - A dynamic class can be added. It will add a `data-v-<<somenumber>>`. This will limit it's scope to that certain object that it's on. This is like a way to apply style just for that one component. Another way to do it is to give it some sort of custom class on an HTML element.

<br>

**Composable** - Where you can organize Vue logic 

- `use` identifies it as a composable. So the title of the composable should start with `use`.   
*Example*
```
useGetData.ts
```

- Also Composables as a directory needs to be in Nuxt and it needs to have the correct spelling. Other than that, Vue will know that it exists.

<br><br>

### Vue Component Analysis

Overview - I wanted to do an analysis of a piece of code that's in a Vue component so that I can then transfer it to a UI Component in Storybook 

*Example*
```
<div class="search-wrapper">
    <label
    for="search"
    title="Search"
    >
    <input
        id="search"
        v-model="query.search"
        type="text"
        placeholder="Search"
    >
    </label>
    <button @click="searchBikes">
    Search Bikes
    </button>
</div>
```

`<label>` == Used to label the form that precede it

`<label for="search"` == The `for` is used w/ a `<label>` element. The purpose is that it describes the `<form>` element that precede it

`<label title="Search"` == The attribute used to add a tooltip with title text to the label when a cursor is hovered over it

`<input>` == Element used for a text field

`<input id="search"` == `id` is used to create a relationship between the `<input>` form element and the `<label>`. So that means the `<label>` "for" attribute needs to be the same as the "id" attribute for `<input>` 

`<input v-model="query.search"` == 

<br><br><br>

<hr>

### Vue Concepts

#### v-model
- 2 way data binding between in input and a form data or between 2 components

- v-model is a directive that lets us bind component data to template elements

- "Directives" let us manipulate the DOM. It's been described as a "template token"

- Directive examples: 
    - v-model
    - v-if 
    - v-bind 
    - v-show

- v-model creates a 2 way data binding between a value in our template and value in our data properties

- This is commonly using in form elements

```
<input 
    type="text" 
    v-model="name"
/>

const name= ref("");
```
- These seem to involve variables that are "reactive" which is something I've heard before of course. That means that it's a variable that Vue sort of keeps track of and it will update dynamically as need be.

**Differece between v-model and v-bind**  
v-model == Provides two way data binding. When the data changes the input will change too. Then when the input changes the data will change.  
v-bind == Data will only flow one way  

<br>

**v-model Modifiers**
- Changes the behavior of v-model
- Normally seen with a dot modifier (e.g. v-model.modifier)

*Example*
```
v-model.lazy
```
.lazy == Data only syncs on change events. Can reduce the number of syncs that can improve performance. 

<br>

*Example*
```
v-model.number
```
.number
- When we use text inputs the data will become a string
- When using the `.number` modifier you're ensuring that the value of the data stays a integer and not string
- Also when this is used it will strip out any letters from a number. For example if a "7asdf" is entered into a text field, then it will only return the value of "7"

<br>

*Example*
```
v-model.trim
```
.trim
- Removes any leading or trailing space



#### Data Binding
**2 Main Steps**
1. Passing data from a parent to a component
1. Emitting any changes from child to parent using events

- Default prop name for v-model is `modelValue`
- Default event is `update:modelValue`
- You can change the prop name or customize it by just placing a new name after v-model
*Example*
```
v-model:newName
```
- This changes the prop name and the event

<br><br>

**Simplified Example**

  ![Image from images folder](~@source/images/vue/vue_v-model_simplified.png)

title == Name of the prop that will be available in the child component  
pageTitle == Data in the parent component that we are binding

- v-model then passes the prop and listens for the @update event



<br><br>

<hr>

### (OLD) Thoughts on Vars, v-model, arrays, computed, emit event

- I'm currently working on what is a piece of code that's a search feature. We want to take that search feature and make a UI component out of it. 

- I need to make the connection between:
    - v-model
    - standard variable (e.g. placeholder)
    - computed variable
    - emit event

