# Vue | Custom Props

Summary - How to use Custom Props in Vue components (index.vue file) and how inheritance works between components and Storybook stories

### Define Custom Prop
1. Find the tag  
```
<script setup>
```
2. Find the defined variable (create it if not there):   
```
const props = defineProps({
```
3. Create a new object for your custom prop giving it:
    1. Name 
    2. Type - Such as string or boolean 
    3. Default value - Can be left blank
```
propName: {
    type: String,
    default: 'Clear Selection asdf'
    }
```
<br>

### Use Custom Prop as attribute value
1. Identify and what attribute you want to use your custom prop in  
e.g.
```
<button title="asdf">
```
2. Add a v-bind to the attrbute by adding a colon
```
:title
```
3. Set the value of the attribute to the custom prop
```
<button :title="clearButtonTitle">
```
<br>

### Use Custom Prop in html
```
<p> {{propName}}</p>
```
