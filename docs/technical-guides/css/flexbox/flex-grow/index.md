# CSS | Flex Grow

Overview - When you have items that don't take up all of the main flex container space, this tells it how to deal with the extra space. 

<br/>

**Where to place it?**  
Flex items


### Flex Grow Settings

#### flex-grow: 0
With a flex-grow of 0, you can see that all of the items don't take up the entire space of the flex container. Use flex-grow to figure out how to use the space with the flex items 
<br/>

_Example:_ 

![Image from images folder](~@source/images/css/flexbox/flex-grow/css_flexbox_flex-grow_grow-zero.png)   

<br/>

#### flex-grow: 1  
With a setting of 1, all of the flex items will take up an equal space 
<br/>

_Example:_  

![Image from images folder](~@source/images/css/flexbox/flex-grow/css_flexbox_flex-grow_grow-one.png)  

<br/>

#### flex-grow: _mixed_  
You can set a custom `flex-grow` for each element and they will respond appropriately. 
```
.first-item {
    flex-grow: 1
}

.second-item {
    flex-grow: 1
}

.third-item {
    flex-grow: 2
}
```

_Example:_   
![Image from images folder](~@source/images/css/flexbox/flex-grow/css_flexbox_flex-grow_grow-mixed.png)  
**Breakdown**  
You can see that the first two flex items take up an equal space but then the third takes up more becuase of the flex-grow: 2  


**How else might you use this**  
When you only want a maximum of two items per row. Set with a `flex-grow: 2` so by theory when there is more than 2 they will get kicked to the next row. 