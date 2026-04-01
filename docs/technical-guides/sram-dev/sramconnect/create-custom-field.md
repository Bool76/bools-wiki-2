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
1. _variables.scss
1. ProductGroupStoryPage.cs
1. _product-group-story.scss
1. ProductGroupStoryPageViewModel.cs
1. ProductGroupStoryPage/index.cshtml

<br>

### Steps | High Level
1. _variables.scss -- Create new CSS variable for new custom field
1. ProductGroupStoryPage.cs
    1. Create new field
    1. Add `ISupportsCustomCssProperties` to public class list 
    1. Create public Dictionary + associate new field to new CSS variable
1. _product-group-story.scss -- Set class to new CSS variable
1. ProductGroupStoryPageViewModelcs -- Set currentPage to a variable `CurrentPage`
1. ProductGroupStoryPage/index.cshtml -- Add `CustomCss`call to targeted html tag

<br>

### Steps | Detailed


 1. _variables.scss | Create new variable 
    1. Fine the best section to add the new custom variable - Consider the page / block type 
    1. Name the variable and set it to a color:
    ```
    --product-group-tagline-color: var(--color-white);
    ```
 
 <br>
 
 1. ProductGroupStoryPage.cs | Create new field
    1. Inside of the `public class` enter the code for the new field:
        ```
        [Display(Name = "Product Group Tagline Color", Description = "Use a hex color format ", GroupName = SystemTabNames.Content, Order = 23)]
        public virtual string TaglineFontColor { get; set; }
        ```
        Breakdown: 
        1. Summary -- Creates a text field so it can accept the hex code
        1. Name -- Title of the field that will display
        1. Description -- Will display when hovering over field
        1. GroupName -- Indicates where the field will display / what part of the epi page
        1. Order -- Order in which the field will display
        1. public virtual string -- `string` indicates it's a text field and `TaglineFontColor` is the unique name you've given the field for reference later 

        <br>

1. ProductGroupStoryPage.cs | Associate new field value to new CSS variable 
    1. Add `ISupportsCustomCssProperties` class to list of public classes
    1. Create a public `Dictionary` function to associate CSS variable to the new field:
    ```
    public Dictionary<string, string> CssProperties => new Dictionary<string, string>()
    {
        ["--product-group-tagline-color"] = TaglineFontColor
    };
    ```

    <br>

1. _product-group-story.scss | Set class' attribute to new CSS variable
    1. First you'll need to know the class / html tag that you want to target and it's attribute you want to control
    1. Set that class' attribute to new CSS variable:
    ```
    .product-title {
        color: var(--product-group-tagline-color);
    }
    ```
    
    <br>

1. ProductGroupStoryPageViewModel.cs | Create a variable for currentPage  
    Overview - We need to create a "variable" for currentPage which we'll be using / referencing in the ProductGroupStoryPage/index file

    In the `ProductGroupStoryPageViewModel` function set currentPage to a new CurrentPage variable (I'm calling it a variable though it could be wrong)
    ```
    public ProductGroupStoryPageViewModel(ProductGroupStoryPage currentPage, SiteSection section, SiteSubSection subSection) : base(currentPage, section, subSection) { 
            CurrentPage = currentPage;
        }
    ```
    <br> 

1. ProductGroupStoryPage/index.cshtml | Add CustomCsscall to targeted html tag
    1. Find the html tag you want to control with the new field / CSS variable
    1. Add the `CustomCss` call outside of the html tag's class
    ```
    <h1 class="product-title" @Html.CustomCss(Model.CurrentPage)>@Model.CurrentPage.Tagline</h1>
    ```
    Breakdown: 
    1. What does this do?  
    It somehow populates the custom CSS var and it's custom (user inputted) value from EPI inside of the HTML tag 
    1. First off this is tricky shit and drove me nuts. Cause I wasn't finding the right way to call this. 
    1. When I first used `Model.CurrentPage`, `CurrentPage` wasn't defined and it needed to be defined in the file ProductGroupStoryPageViewModel. 
    
    It needed to be defined in ProductGroupStoryPageViewModel, because in the cshtml file, at the top of the file it's calling the model using `@model ProductGroupStoryPageViewModel`




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

<br>

2. In the cshtml file, when you try to use / call the custom field value in a html tag, it errors because you don't have a defintion for `CurrentPage`  

    FIX:
    1. At the top of the cshtml page find what model file is being called  
    Example: 
    ```
    @model ProductGroupStoryPageViewModel
    ```
    2. In the ViewModel page create a defintion for `CurrentPage` 