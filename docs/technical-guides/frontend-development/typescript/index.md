# Typescript

Overview - What the hell is Typescript all about, when should you use it, and should you use it?

<br>

### Definition

(draft) An open-source language that builds on Javascript by adding static type definitions

<br>

### Background
Javascript by it's nature is not a langauge that uses "types" or "static types" when considering creating variables, meaning it is loosely typed 

*Example*
```
// String
var mysteryBox = "Hello?";

// Integer
var mysteryBox = 1;

// Boolean
var mysteryBox = true; 

// Object
var mysterBox = { message: 'Hello?' }
```

Breakdown:  
Notice that `mysteryBox` can equal a string, integer, boolean, etc. You don't have to set the variable to a specific static type. JS will just know. 

<br>

### Why use it?
1. Setting types will help format your code in a cleaner way
1. It can help make code easier to read and debug because the type is known
1. If you're using Vue 3 - Typescript it will work w/ no issues w/ it