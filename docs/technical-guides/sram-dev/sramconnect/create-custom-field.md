# SRAM Connect | Create Custom Field

Overview - You were assigned to create a custom field so that someone could apply a custom color to some text using a hex code. Through this exercise you ended up having a bunch of errors and road blocks. I wanted to write down some basic steps and things to keep in mind, including Possible Issues

<br>

## Brainstorm
1. List out possible files that you'd deal with
1. Write out instructions and the possible variants to it
1. Continue buidling on Possible Issues

<br>

## Example 1 | Custom Font Color Field for T4 Page

Overview - Create a custom font color field for the tagline field for the T4 Page template which is also called Product Group Story Page.


#### Involved Files
1. ProductGroupStoryPage.cs
1. ProductGroupStoryPage/index.cshtml
1. _variables.scss





<br><br>

## Possible Issues

1. Your build is failing for `ISupportsCustomCssProperties` in your CS file but only because you're calling it in the `public class` but you're not using it yet! 

FIX: Create a the `Dictionary` function where you're going to use `CssProperties` and thus use `ISupportsCustomCssProperties` 

```
public Dictionary<string, string> CssProperties
           => new Dictionary<string, string>()
           {
               ["--product-group-tagline-color"] = TaglineFontColor
           };
```