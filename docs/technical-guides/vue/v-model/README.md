# Vue | v-model

<br>

### Research Notes

- There seems to be a relationship between "value" and "state"
- `<input v-model="text">` - Means that the `input` has a value set at "text"
- Using curly brackets surrounding text is a way to spit out a variable: 
```
<p style="white-space: pre-line;">{{ message }}</p>
```
In this `message` is a variable name
- A checkbox example would look like:
```
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```
- `v-model` values for `<input>` types such as "radio" or "select" are usually strings type values. However checkboxes are usually boolan type values.
```
<!-- `picked` is a string "a" when checked -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` is either true or false -->
<input type="checkbox" v-model="toggle" />
```
- I think a way to think about this is that `v-model` is all about how to give and change the value of an object on a web page
- true-value and false-value are Vue-specific attributes that only work with v-model

<br>

### Filters Exercise w/ Luke

- I would look into: 
    - v-for
    - v-if
- v-for loop make sure you understand the relationship between `value` and `key`. I am sure that these are concepts that are fairly common with for loops