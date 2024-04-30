# C# | List&lt;T> Class


### Description

List&lt;T> is a predefined C# class that can be used to create a collection object of data. A _List_ allows to indicate what type of data will be in it; integers, strings, or custom data type.  


<br/><br/>

### Current Questions
1. Is it always called `List` or does it have some sort of name? If it doesn't then how do you know the difference between one _List_ and another?
2. If `<T>` allows to indicate what type of elements are in the list does that also mean it accepts `string`?

<br/><br/>

### Constructor
How to initialize a new instance of the `List<T>` class that is empty and has the default initial capacity

```
List<T>()
```

`<T>` == Indicates the type of elements in the list

<br/><br/>

### Creating new instance

```
List<int> firstlist = new List<int>();
```

Highlevel Steps:
1. Specify the List name (<span class="warning">Include something about int?</span> ) 
2. Create a name of your object 
3. Assign the new object a null value which creates an empty container needed for the object 

A class is a reference type and at the run time, any object of the reference type is assigned a null value unless it is declared using the new operator. The new operator assigns space in the memory to the object only during run time which means the allocation is dynamic. 

`List` == When creating an object, which is an instance of the Class, you must identify the name of the Class.  
> :memo: **Note:** The Class (`Car`) is also called a "reference type" at run time    

`<int>` == Indicated this _List_ has a type of integer  

`new List<int>();` == Initializes a new instance of the `List<T>` class that is empty and has the default initial capacity.  You must assign the new instance of the _List_ it a null value or a container to hold the value of the _List_ thus creating a memory storage for it

`firstlist` == Give the instance of the List a name  

<br/><br/>

### Helpful Links
1. [ GeeksForGeeks | List Class](https://www.geeksforgeeks.org/c-sharp-list-class/#)

