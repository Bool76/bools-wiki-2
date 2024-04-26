# Flex | Two items per Row

Summary - How to limit two items per row in the Flexbox framework 

<br/>

### Two Approaches

1. flex-direction: row
1. flex-direction: column

<br><br>

### flex-direction: row 

<br>

**html**
```  
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/products">Our Products</a></li>
    <li><a href="/contact">Contact Us</a></li>
</ul>
```
<br>

**css**
```
ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}

li {
    box-sizing: border-box;
    width: 50%;
    padding: 10px;
}

a {
    text-decoration:none;
}
```


<br><br>

**Breakdown**

ul Styles
- `display: flex` == Sets the `<ul>` as a Flex Container and therefore all it's `<li>` children as Flex Items
-  `flex-wrap: wrap` == Defines whether the flex items in the main container are forced in a single line or can be flowed into multiple lines. `wrap` means it will flow to mulitple lines. If set to `nowrap` it would be one single line.  
- `list-style: none` == Removes bullets from standard `<ul>` format 

<br>

li Styles
- `box-sizing: border-box;` 
    - `box-sizing` - Can be used w/ Flexbox
    - `box-sizing` - For the Flex Items - It tells the browser to account for any border and padding values so that the container width and height still honors what's been defined in the width and height attributes.
- `width: 50%` == Each Flex Item's width will be 50% of the parent container