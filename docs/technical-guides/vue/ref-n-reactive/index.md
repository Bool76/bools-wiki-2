# Vue | Ref() and Reactive()

Summary - Guidelines on when to use the ref() and reactive() methods

#### What are they used for?
When you want a value of something to change based upon a certain behavior or action. This should be thought of when talking about "state" or changing the state of something or also "store". "Store" has been used in Vue JS to represent state work 

#### When should you use one over the other?
ref() === When the value you want to update / change is a string, boolean, integer, as well as objects 

reactive() === When the value you want to update / change is an object

#### Any other differences?

1. ref() .value Property  
To reference or retrieve the content in ref() you need to add the ".value" property

```
const x = ref({ name: 'John'});
x.value.name = 'Amy';
```
Notice that it's not just "x.name", but ".value" isn included


2. reactive() .value not needed
To reference or retrieve the content in reactive() you can simply call it with the const name and the specific property requested
```
const x = reactive({ name: 'John'});
x.name = 'Amy';
``` 

#### So give me a real world example

FILL THIS OUT

