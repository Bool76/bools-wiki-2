# How to Create a Circle w/ CSS

Overview - I wanted to create a circle with just a boarder around a single letter. I found that using the pseudo element is the way to go. There was another approach but I couldn't get the circle centered the way that I wanted. Always seemed to be a little off. But using the pseudo element to create the circle gave me more of the control I wanted. 

<br><br>


### Example html
```html
<div class="circle"></div>

```

<br>

### Example CSS 


```css
/* Create a circle with the ::before pseudo-element */
.circle {
  position: relative; /* Required to position the pseudo-element correctly */
}

.circle::before {
  content: ''; /* Needed for the pseudo-element to appear */
  display: block;
  width: 100px; /* Circle diameter */
  height: 100px; /* Circle diameter */
  border-radius: 50%; /* Makes it round */
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #000;
}
```



### Notes
1. Because it's just an outline I didn't use background color
1. To create the stroke use `border`
1. Control the placement of the circle by using `top` and `left`