# CSS | min-Width and max-width

Overview - The rules you can apply when using media queries or container queries

<br>


### max-width

**Basic premise** - Apply changes to the identified width and less than it. Normally used when thinking about designing in "desktop first" design. 

```
@container(max-width:500px){
    .card {
        width:250px;
        height:250px;
    }
}
```

Style will be applied to the `.card` object at 500px or less

<br>

### min-width

**Basic premise** - Apply changes to the identified width and greater than it. Normally used when thinking about designing in "mobile first" design. 

```
@container(min-width:500px){
    .card {
        width:250px;
        height:250px;
    }
}
```

Style will be applied to the `.card` object at 500px or greater