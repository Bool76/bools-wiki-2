# Vitepress Theming

<br><br>

## Notes

Seems like right now there's a way to override styles just by the use of a `custom.css` file

Location: `docs/vitepress/theme`

<br><br>

## Create file to override theme:

<br>

1. Create a `theme` folder inside of the vitepress directory
1. create an `index.js` file inside of the `theme` folder
1. Inside of the `index.js` file include the following code:
```js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

4. Enter css overrides in the `custom.css` file

*Example*
```css
:root {
    --vp-layout-max-width: 1600px
}

body, p {
    font-size: 14px;
}
```

<br><br>

## Override Approachs

<br>

**Use a pre-defined variable**

```css
:root {
    --vp-layout-max-width: 1600px
}
```

<br><br>    

## Override Classes that are Scoped

Summary - There's an issue I'm having with overriding styles in this Vitepress site where the class is scoped meaning that it has some sort of `data-v` value associated to it. 

<br>

*Real Example in Vitepress*

```css
.VPDoc.has-aside .content-container[data-v-da69c9d5] {
    max-width: 688px;
}
```

I can't seem to override it because of the scoped `data-v` value on it therefore I have to find a way to override this. Below I will investigate what possible approaches there are to overrides and identify if any of them have worked.

<br>

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