# Vitepress Theming

<br>

Overview - How to handle theming in Vitepress

<br>

### Basic Steps:
1. Create a css override file
1. Import the new override css file 
1. Enter override code
    1. Enter code for basic overrides
    1. Enter code to override default styles (e.g. Vitepress styles)


<br><br>

## Steps

<br>

1. Create a css override file 
    1. Create a `theme` folder inside of the .vitepress directory
    1. Create a css file inside of the `theme` folder something like `custom.css`
    1. The path would look something like this:
    ```
    .vitepress/theme/custom.css
    ```
1. Import the new override css file
    1. Inside the `theme` folder create an `index.js` file
    1. Inside of the `index.js` file include the following code:
        ```js
        import DefaultTheme from 'vitepress/theme'
        import './custom.css'

        export default DefaultTheme
        ```

<br>

## How to Enter Override Code at Site Level

<br>

> :memo: **Note:** To see your changes you just have to save the file and therefore there's no codeto compile your changes


<br>

3 different Types of Overrides or Styling all at the Site Level
1. Basic Tag Overrides 
1. Vue Variable Overrides
1. Vitepress Styles (Scoped Styles)


> :memo: **Note:** You should know this but all of these overrides happen in your `custom.css` file

<br><br>

### Basic Tag Overrides  

Overview - This is how to override basic tags such as `<h1>` and `<p>`

Example:
```css
body, p {
    font-size: 14px;
}
```

<br><br>

### Vue Variable Overrides

Overview - Since Vitepress is using Vue there are basic Vue theming variables that are being used. First you need to know which ones are availible (I would just Google that right now). Then you can override them in your `custom.css`.

Example:

```css
:root {
    --vp-layout-max-width: 1600px
}
```

<br><br>

### Vitepress Styles (Scoped Styles)

Overview - There are some styles that are being applied somewhere in the Vitepress theme and they have been "Scoped". This means that when you look at the style you're going to see something like this:

```css
.VPDoc.has-aside .content-container[data-v-da69c9d5] {
    max-width: 688px;
}
```

<br>

The problem child that I want to point out is the `data-v-da69c9d5` portion. This means that where this style is set it's also scoped which means the file would look something like this:
```css
<style scoped>

p {
    font-size: 12px;
}

</style>
```

<br> 

I had MANY issues with trying to find a way to override these. The following is the only way I've seen I can do it. Which is basically having to use `!important`. Again using the above example with `data-v-da69c9d5`. 

1. Go to your `custom.css` file
1. Enter the code:
```css
.VPDoc.has-aside .content-container {
    max-width: 1500px !important;
}
```
3. You just need to follow the path of selectors and use `!important`. Below I'll add some of the research that I did try to try use something different, however nothing else worked. 

<br><br>




<br>




## Research for Overriding Scoped Styles in Vitepress

> :warning: **Warning:** REMEMBER THAT NONE OF THIS WORKED!

<br><br>

### Override w/ ::v-deep Selectors

Overview -  Vue provides a special combinator called ::v-deep to allow you to target child elements within a scoped component

*Example*
```css
::v-deep .button-class {
  color: red; /* New color applied */
}
```
<br><br>

#### Attempt #1

```css
::v-deep .VPDoc.has-aside .content-container {
    max-width: 900px;
}
```

Result:  
FAILED. No change in styles. Didn't even see it in dev tools analysis 

<br><br>

#### Attempt #2

```css
.VPDoc.has-aside ::v-deep.content-container {
    max-width: 900px;
}
```

Result:  
FAILED. No change in styles. Didn't even see it in dev tools analysis 

<br><br>

#### Attempt #3

```css
.VPDoc.has-aside ::v-deep .content-container {
    max-width: 900px;
}
```

Result:  
FAILED. No change in styles. Didn't even see it in dev tools analysis 

<br><br>

#### Attempt #3

```css
::v-deep .content-container {
    max-width: 900px;
}
```

Result:  
FAILED. No change in styles. Didn't even see it in dev tools analysis 

<br><br>

#### Attempt #4

```css
.VPDoc.has-aside {
    ::v-deep .content-container {
        max-width: 900px;
    }
}
```

Result:  
FAILED. No change in styles. Didn't even see it in dev tools analysis 

<br><br>

#### Attempt #5

```css
::v-deep (VPDoc.has-aside .content-container) {
    max-width: 900px;
}
```
Result:  
FAILED. This was a suggestion from ChatGPT. `::v-deep` seemed to be an older approach but still didn't work

<br><br>

#### Attempt #6

```css
::deep (VPDoc.has-aside .content-container) {
    max-width: 900px;
}
```
Result:  
FAILED. This was a suggestion from ChatGPT. `:deep` seems to be a newer approach but still failed.