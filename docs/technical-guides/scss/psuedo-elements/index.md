# SCSS | Psuedo Elements

Overview - How to use a psudeo element in SCSS / where to put it


### Basics

With the element you want to attach it to, just nest it inside of that tag and use `&:<psuedo-type>`



### Steps
1. You have to know what selector the psuedo element / code is going to placy off of. 
1. In the example we are going to work with it's `<a>` 
1. You are going to place it nested inside of the a. Please see the example code:
```
li{
  list-style:none;
    a {
        color:#fff;
        &:hover {
            color:red;
         }
     } 
}
```