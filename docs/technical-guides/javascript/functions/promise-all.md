# Promise.All

Summary - A built-in JavaScript method that lets you run multiple operations (async) at the same time and wait for all of them to finish.

<br>


### Details
1. Set like a variable
1. It's an array
1. Each item in the array can be referred to as a promise
1. When one promise fails then the entire array / variable fails
1. Results come back as an array

<br>

### Why do this?
When you have multiple lines of code that are logically grouped together AND if you require them all to pass 

<br>

### Basic Example

```
const [examplePromise] = await Promise.all([
    promise1, 
    promise2, 
    promise3
]);
```

##### Breakdown
1. An array is created w/ the custom name "examplePromise"
1. The array is set to the type `Promise.all`
1. examplePromise has 3 different promises inside of it that all need to suceed in order for examplePromise to completely run