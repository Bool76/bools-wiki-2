# CSS | Box-Sizing

Overview - The `box-sizing` property sets how the total width and height of an element is calculated - changing it from it's default behavior   

<br>

**Why do we need this?**  
When you want the set width and height NOT to be affected by the `padding` or `border` attribute

<br><br>

### Box-Sizing Values
1. content-box (default)
1. border-box

<br><br>

### "content-box"
`content-box` is the default behavior of the `box-sizing` attribute (meaning if nothing is ever set for it)

If a width and height are set, then any additional attributes (like padding of border) will be added to set width and height. Meaning they make the container size bigger. Thus most likely not giving you the intended size.

<br>

*Example*
```
<div>
    box-sizing: content-box;
    width: 100%;
    border: solid #5B6DCD 10px;
    padding: 5px;
</div>
```
<br>

*Screenshot*  
![Image from images folder](~@source/images/css/box-sizing/box-sizing_content-box_default.png)

**Breakdown**
- `width: 100%` has been set so the child container should only be the width of the parent container
- However notice that the child container has now expanded beyond the parent
- The child expanded beyond because of the `border` and `padding` settings


<br><br>

### "border-box"

`border-box` tells the browser to account for any border and padding values so that the container width and height still honors what's been defined in the `width` and `height` attributes.

<br>

*Example*
```
<div>
    box-sizing: border-box;
    width: 100%;
    border: solid #5B6DCD 10px;
    padding: 5px;
</div>
```
<br>

*Screenshot*  
![Image from images folder](~@source/images/css/box-sizing/box-sizing_border-box.png)

**Breakdown**
- `width: 100%` has been set so the child container should only be the width of the parent container
- `box-sizing: border-box` has been set
- There are settings for both `padding` and `border` however because of the `border-box` setting - the `padding` and `border` won't have an affect on the child container's width.


<br><br>

### Box-Sizing's Affect on Flexbox

This is the weird thing. I thought that using Flexbox could control exactly how flex items are displayed and arranged  (e.g. - If I wanted two flex items per row). However when I used a flexbox row layout, I still needed to use the `border-box` attribute so that padding and border were ignored.

See [Two Items per Row](/css/flexbox/flex-two-items-row/) article