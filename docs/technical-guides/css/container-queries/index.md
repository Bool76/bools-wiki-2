# CSS | Container Queries

Overview - If you use Media queries to control designs, the design of a container's contents is all based on the browswer's viewport width. Container Queries change that logic and base design adjustments according to a specified container (and it's width) rather than the browser's viewport.


<br>

### Container Queries vs Media Queries 


**Container Queries** - Changes based on the a specified container's
 width

**Media Queries** - Changes based on the entire viewport width

<br>

### Basic Steps

1. Identify the container that you want design elements to be controlled by

NOTE: Of course the design elements need to be inside of said container

*Example*  
![Image from images folder](~@source/images/css/container-queries/container-query-example-01.png)

In the above it's a card type container that holds an image, description, and a couple of buttons. It's this card's width that we want to base how it's content will look.

<br>

2. Use the CSS attribute `container-type` on the container you want to work with and set it to `inline-size`

```
.display-card {
    container-type: inline-size;
}
```
<br>

3. On the container you also might want to set it's width to 100%. Why? Because the style of the container's content can change based on the width of the container. Therefore the container's width needs to flex on whatever it's inside of.

```
.display-card {
    container-type: inline-size;
    width: 100%;
}
```
<br>

4. Write the container query (very much like you would for media queries):
    1. Specify basic rules around what width to apply the styles 
    1. Identify the object you want to affect by using it's class 
```
@container(max-width:500px){
    .card-image {
        background-color: #fff;
        height:250px;
    }
}
```
`@container` == Nomenclature to use when identifying a container query  
`max-width` == You can use the same approach around width rules as you did w/ media queries (e.g. Could also use `min-width`)  
`max-width:500px` == When the parent container is 500px or less then the styles will be applied

<br>

### "container-type" Options

**inline-size** - Use when you want the design changes to be based on the container's width (and only the width). This is most common application. 

**size** - Use when you want the design changes to be based on the container's width and height

<br>

### Naming the Container 

To assure that you're utilizing the intended "parent" container one way is to name the indented container

#### Steps

1. Identify the container that you want design elements to be controlled by. Use the CSS attribute `container-type` on the container you want to work with and set it to `inline-size`

```
.display-card {
    container-type: inline-size;
}
```
<br>

2. Use the `container-name` attribute to set a unique name to the container

```
.display-card {
    container-type: inline-size;
    container-name: card-container;
}
```
<br>

3. In the CSS styles include the name of the container next to `@container` 

```
@container card-container (max-width:500px){
    .card-image {
        background-color: #fff;
        height:250px;
    }
}
```

> :memo: **Note:** If a name isn't identified in the styles then Container Queries will look to the next item that's been identified w/ a `container-type` and follow it's width
