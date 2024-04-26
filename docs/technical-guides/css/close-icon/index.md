# CSS | Close Icon

Overview - How to create a close icon or an "X" using CSS instead of an SVG


<br>

### Why use CSS over an SVG? 
I liked that it gave me more control over the thickness of the "X", the height and width, and color without having to be an SVG or some sort of 


### How to

#### CSS
```
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
```
#### html
```
<a href="#" class="close">
```