# Limit Rows of Text

Summary - How through CSS do you limit the lines / rows of text

### Option 1

Use "line-clamp"

```
.text {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
}
```

Notice the use of:

- webkit-line-clamp
- line-clamp
- weblit-box-orient

### Option 2

Use "max-height"

```
.multipromo-slider-container p {
    font-family: Roboto-Regular,Helvetica,Arial,sans-serif;
    color: #000;
    font-size: 14px;
    line-height: 30px;
    width: 250px;
    overflow: hidden;
    max-height: 5.5em;
}
```

Notice the use of:

- overflow: hidden
- max-height == Will vary depending how many lines you're looking to hide
