# HTML | HTMLCollection

<br>

### What is it?

It's a generic collection (much like an array object) that's available in the HTML DOM. The HTMLCollection is dynamic and can change.

[DOES THIS NOTE STILL MATTER?]  
NOTE: Because the HTMLcollection can change it might be a good idea to make a copy using an array (though in practice I haven't done this yet)

<br><br>

### Where does it come from?

During the time of this article, I had come across this DOM collection from using `getElementsByClassName`

<br>

_Example_

```
const asdfSelectBox = document.getElementsByClassName("asdf");
```

<br><br>

### How do you use it?

<br><br>

### Methods and Properties

| Type     | Name        | Code                       | Description                                                              |
| -------- | ----------- | -------------------------- | ------------------------------------------------------------------------ |
| Method   | item()      | HTMLCollection.item()      | Returns the specific element at the given zero-based index into the list |
| Method   | namedItem() | HTMLCollection.namedItem() |                                                                          |
| Property | length      | HTMLCollection.length      |                                                                          |

<br><br>

### Historical Note

The HTMLCollection is actually fairly old tech and it's only still supported as to not break sites still using it

NOTE: This is something the article stated that I was reading but I would say this logic doesn't make sense considering some older code features are deprecated and you have to change them)
