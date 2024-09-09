# Bootstrap | Margins + Padding

**Overview** - Bootstrap allows you to add custom classes that are geared toward adding a desired margin or padding. These custom classes are built by piecing together a series of predefined options for properties, sides, and sizes. Below we'll talk about how to use those options, their predefined values, and how to piece them together for your custom class.  

<br>

## Margin and Padding Options 

<br>

Below are the three different options that are concatenated together to create a custom class for you to use to apply a martin or padding to an HTML DOM object 

<br>

### Property Options

| Code | Defintion |
| ---- | --------- |
| m    | margin    |
| p    | padding   |

<br><br>

### Side Options

| Code | Definition              | Expanded Example                       |
| ---- | ----------------------- | -------------------------------------- |
| t    | top                     | margin-top                             |
| b    | bottom                  | margin-bottom                          |
| s    | start                   | sets for margin-left or padding-left   |
| e    | end                     | sets for margin-right or padding-right |
| x    | sets for left and right |                                        |
| y    | sets for top and bottom |                                        |

<br><br>

### Size Options

| Code | Definition                  |
| ---- | --------------------------- |
| 0    | Margin and Padding set to 0 |
| 1    | $spacer \* .25              |
| 2    | $spacer \* .5               |
| 3    | $spacer \* 1.0              |
| 4    | $spacer \* 1.5              |
| 5    | $spacer \* 3                |

<br><br>

#### $spacer

`$spacer` is a variable that set in Bootstrap. By default it looks like it's set in the file \_variables.scss and set to:

`$spacer: 1rem !default;`

<br>

In the above size options lets look at an example:

`$spacer * .25`

That would then equal:

`1 rem * .25 == 0.25rem`

<br>

## How to Use it!

<br>

### Steps

1. Select a property
1. Select a side
1. Select a size (spacer)
1. Create your custom class by piecing together the custom properties in the correct format
1. Add your custom class to a DOM object

<br>

### Example
Lets say we want to add a top padding to a container

1. Select a property - Since we want to add a padding we're going to use `p`
1. Select a side - The side we want to apply this to is the top so we'll use `t`
1. Select a size - Lets just pick a size - `3`
1. Create the class:
    1. Follow the format:
    ```
    {property}{sides}-{size}
    ```
    2. Our example
    ```
    pt-3
    ```
1. Add our new custom class `pt-3` in the html doc in the DOM object of our choice
```
<div class="row pt-4">
        <div>
            asdf
        </div>
</div>
```


<br><br>

## Applying a style for a specific breakpoint

You can apply a style for a specific breakpoint on a single DOM object. You'll go through much of the same process with creating a custom class by combining options

<br>

### Steps
1. Select a property
1. Select a side
1. Select a size (spacer)
1. Select the breakpoint where you want this to apply 
    1. See Predefined Breakpoint table below
    1. Also consider that the style will apply based on a mobile first design approach (i.e. min-width)
1. Concatenate the options together in the following pattern:

```
{property}{sides}-{breakpoint}-{size}
```

<br>

*Example*
```
pt-lg-0
```


<br></br>


### Predefined Breakpoints

| Breakpoint Size   | Class Prefix | Width   |
| ----------------- | ------------ | ------- |
| Extra Small       | xs           | <576px  |
| Small             | sm           | ≥576px  |
| Medium            | md           | ≥768px  |
| Large             | lg           | ≥992px  |
| Extra Large       | xl           | ≥1200px |
| Extra Extra Large | xxl          | ≥1400px |


