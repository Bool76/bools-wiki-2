# Javascript | Functions [draft]

Overview - A way to store steps that will typically result in returning a value

### Parts of Function

1. Name
1. Arguments (parentheses) == Think of these are paramenters. This is when input values are needed to perform a function's code block.
1. Code Block (curly brackets) == The area of the function that houses the lines of code, statements, tasks, or steps that will most likely result in returning some sort of value

<br>

```javascript
function getHelloMessage(name) {
  const currentName = name;
  const message = "Well hello";
  const totalMessage = message + currentName;
  return totalMessage;
}
```

Function Name == `getHelloMessage`

Arguments == `name`

Code Block == Everything that you see inside of the curly brackets

<br><br>

---

### Calling a Function

Whenever you want to use a function that has been written you simply have to call it. What do you need to call it?

1. Function name
1. Parameters -- Even if you don't happen to be passing in any values / parameters you'll need a set of parentheses

<br>

**Example w/ no Parameters**

```javascript
getName();
```

Function Name == `getName`  
Parameters == Right now this is just an empty set of parentheses

<br>

**Example w/ Parameters**

```javascript
getHelloMessage(name);
```

Function Name == getHelloMessage  
Parameter == name

<br><br>

---

### Functions w/ Arugments

Why do functions have arguments (parameters)? Sometimes functions need specific information to perform it's task. Therefore these values need to be passed into the function. There are two different ways arguments can be passed into a function:

1. Aruguments as variables
1. Arugments as actual values

<br>

> **Parameters vs Arugements**  
> There is a difference between the two though often times they're used interchangeably  
> Parameters == More like variables going into a function  
> Arguments == The values actually needed to run the function

<br>

#### Arguments as Variables

```javascript
function getAge(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

const ianBirthYear = 1976;

const iansAge = getAge(ianBirthYear);
```

`function getAge` == Function declared called "getAge" is created

`birthYear` is parameter passed into the function that's required

`const ianBirthYear` == Variable that's created that holds an integer

`const iansAge` == Variable created that calls the function `getAge()`

`getAge(ianBirthYear)` == `getAge` function is called and passes in the variable `ianBirthYear` that holds an integer

<br>

#### Arguments as Actual Values

```javascript
function getAge(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

const iansAge = getAge(1976);
```

`function getAge` == Function declared that's called "getAge" is created

`birthYear` == Parameter passed into the function that's required

`const iansAge` == Variable created that calls the function `getAge()`

`getAge(1976)` == `getAge()` function is called and passes into it an actual value of `1976`

<br><br>

---

### "Return" Keyword

"Return" is needed in a function because it does the following:;

1. Returns a value
1. Returns to the area of the code that originally called the function
