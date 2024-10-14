# HTML | getElementsByClassName

### Overview
You started this because you were coming up with a solution where you wanted to use `getElementsByClassName`. I want to provide some aspects of what I learned.

<br><br>

### Why use getElementsByClassName?
1. When you want to target a DOM element that doesn't have an ID (from where you'd using `getElementById`)
1. When you want to control / change multiple objects at the same time with the same change

<br><br>

### How do you use getElementsByClassName?
It's just like `getElementById` but for this you need to know what the name of the class is

<br>

*Example*
```
const carEngines = document.getElementsByClassName("engines");
```
Breakdown:
1. Create a variable that will store the results so you can do something w/ it == `const carEngines`
1. To use `getElementsByClassName` you need to utlize the `document` object (cause it's a part of that object)== `document.getElementsByClassName` 
1. Pass in the name of the class that you want to utilize == `document.getElementsByClassName("engines")`

<br><br>

### What does using getElementsByClassName result in?
1. An `HTMLCollection` that is sort of like an array of data

Why?  

Since you're pulling from a class name, you'll most likely retrieve data from multiple objects (divs). The results roll up to an `HTMLCollection` - Which is a collection that's available in the HTML DOM 

<br><br>

### How do you access / use HTMLCollection?
*Please see the page: [HTMLCollection](/technical-guides/frontend-development/html/html-collection)*

