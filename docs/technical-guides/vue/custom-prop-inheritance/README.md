# Vue | Custom Prop Inheritance

Summary - How Custom Props behave with inheritance when they are imported in other components and how to override values 


### SENARIO 1: Custom Prop inheritance from another component
*Summary - What happens to the value of a custom prop when that component is imported into another component?*

Details - If Component-A (CA) has a custom prop (CA-Prop) and Component-B (CB) imports CA, CB will inherit the value of CA-Prop

Example: 
- Componet-A (CA) has a custom prop of clearButtonTitle
- clearButtonTitle = "Clear Text"
- Component-B (CB) imports CA
- If CB does nothing with the value of clearButtonTitle then it will still have the value = "Clear Text" 

### SENARIO 2: Set imported component's custom prop to new value
*Summary - A component that imports another component which has a custom prop, that custom prop can be given a new value in the parent component*

Details - If Component-A (CA) has a custom prop (CA-Prop) and Component-B (CB) imports CA, CB can give CA-Prop a new value

Example:
- Componet-A (CA) has a custom prop of clearButtonTitle 
- clearButtonTitle = "Clear Text"
- Component-B (CB) imports CA
- CB can override the value of clearButtonTitle and give it a new value (such as "Clear the Text")

Steps:
1. Locate the tag
```
<script setup>
```
2. Place the import script inside of it to import Component-A (CA) into Component-B (CB)
```
import Component-A from '../../atoms/Component-A/index.vue'
```
3. To use CA in CB locate the tag
```
<template>
```
4. Inside of that tag place the CA tag
```
<template>
    <component-a>
```
> :memo: **Note:** If nothing is done at this point CB will inherit the value of the custom prop from CA  

5. Find the tag  
```
<script setup>
```
6. Find the defined variable (create it if not there):   
```
const props = defineProps({
```
7. Create a new object for your custom prop giving it:
```
newClearButtonTitle: {
    type: String,
    default: 'Clear the Text'
    }
```
8. Go back to the "template" section and inside of the CA tag and add CA's custom prop name along with the colon indicating a v-bind
```
<template>
    <component-a :clearButtonTitle>
```
9. Set clearButtonTitle to your new custom prop you just created in CB
```
<template>
    <component-a :clearButtonTitle="newClearButtonTitle">
```  