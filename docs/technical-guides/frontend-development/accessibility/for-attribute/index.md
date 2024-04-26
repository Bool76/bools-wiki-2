# Accessibility | "For" Attribute

### What is it? 
Attribute that's added to a `<label>` tag

<br>

### What is it used for?
For accessibility purposes it does the following:
1. The screen reader will associate a relationship between the `<label>` and the `<input>` it's related to
1. When you click on the `<label>` text value in the website it will then place an active cursor in the `<input>` field

<br>

### How is it used?
1. Make note of the value of the `id` attribute in the `<input>` tag. If one doesn't exist then please add one
1. Go to the `<lable>` tag and add the attribute `for`
1. Set the `for` value to the value of the `id` from the `<input>` tag

*Example*

```
<label for="serialNumberInput">Serial Number</label>

<input type="text" id="serialNumberInput" />
```