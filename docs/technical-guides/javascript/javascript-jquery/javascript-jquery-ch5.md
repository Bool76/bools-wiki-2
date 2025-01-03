# Chapter 5 | DOM

## Terms

<b>DOM</b> == Document Object Model

<b>DOM Tree</b> == The model of the web page that's created by the browser's interpreter

<br><br>

## Notes

DOM == Document Object Model

DOM == A model of a web page that's created by browsers (all browsers do this). This model is what allows Javascript (and Javascript libraries) interact with the web page

The model is made up of objects

The model could be called the DOM Tree

The DOM defines objects, properties, and methods it has access to

DOM Tree Nodes == The DOM Tree is made up of objects. Those objects can also be called nodes

<br>

#### 4 Types of Nodes

1. <b>Document Node</b> - Top of the DOM Tree. Represents the entire page. It's the starting point to the DOM Tree. You must go through the Document Node to access all other nodes in the model / page.

   _Example_  
   `document.GetElementById`

1. <b>Element Node</b> - Think of these like HTML elements. Each HTML element is an Element Node. Therefore to access them you'll use the appropriate HTML tag. This will lead you to be able to access an HTML's tags methods, text, or attributes.

   _Example_  
   `<p> <div> <h1>`

1. <b>Attribute Node</b> - HTML tags can carry attributes as a part of them. These are represented by Attribute Nodes. Attribute Nodes aren't children of the Element Node but are a part of the Element Node. There are specific Javascript methods which allow you to read or change their values.

   _Attribute Node Example_  
   The class in a div: `<div class="asdf">`

   _Javascript Method Example for Attribute Node_  
   `tagId.className = "Morrison"`

1. Text Node - Typically the Text Node is accessible through the Element Node. The Text Node can't have children. This node can't be broken down any further. In other words, nothing can branch off the Text Node if you're thinking of it in the DOM Tree.

   _Example_  
   The Text Node has the value of "Transformers": `<li>Transformers</li>`

<br>

> :memo: **Note:** When Javascript makes changes to the page, you could think of it as making changes to the DOM Tree in the browser's memory, thus updating the memory of the code with an update.
