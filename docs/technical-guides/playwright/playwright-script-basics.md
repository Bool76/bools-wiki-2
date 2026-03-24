# Playwright | Script Basics

Summary - A basic overview of a testing page. 

> :warning: **Warning:** We are going to use Typescript so these notes and examples will all be based on Typescript!


## Mis Notes

First - You need to import functions that you want to use in your test script

2 common modules:  

1. Tester == Used to create text cases
1. Expector == Used to validate items in Tester

<br>

### Video Example

#### Import Function

```
import {test, expect} from @playwright/test;

```


1. `import` == Keyword used to indicate importing the functions you'd like to use. 99% of the time this is the first command you'll see cause you need to indicate what functions you want to use for the test case. 
1. Use curly brackets == Placing then the functions you want to call inside of them  use
1. `test` and `expect` == Functions that are going to be imported and used in the test case(s)
1. `from` == Identify where these functions can be found  

<br>

#### First Written Test Case

```
test('title of test', ({page})=>{

    // Launch page with url
    page.goto("http://www.google.com"); 

    // Verify page has the title "Test Title"
    expect(page).toHaveTitle("Test Title");

    //Step 3
})

```
1. `test` == Using the `test` function
1. `'title of test'` == First parameter. Title given to the test. Can be whatever you want.
1. `({page})=>` == Second parameter is a custom function or arrow function  
     If it was just an arrow function with nothing passed in it then it would look like `()=>`
1. `page` == Is a reference to the global "page" variable (also called fixture instead of a variable) so that you can use it inside of the function.  
    NOTE: Must have curly brackets  






First parameter is the title of the test

<br>

### Terms

<u>Fixture</u> == Global Variable that could be predefined

  Examples: 
  1. Page == Browser page / tab
  1. Browser == Enture browser obect