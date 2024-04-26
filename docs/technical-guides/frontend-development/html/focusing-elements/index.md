# HTML | Focusing Elements



### Overview

What are we talking about when we talk about "focusing elements" or "focus on html elements" or "html elements w/ focus"? We're talking about the ability to navigate to specific html elements on a webpage usually with the use of the "tab" key.

<br><br>

### Basic Facts
1. Certain html elements (tags) by default will be focusable
1. You can add the attribute `tabindex` to html elements that aren't focusable by default and give the ability to focus on them (Please see the section: tabindex)
1. The Input elements with the `radio` type works a little different w/ focus (Please see the section: Radio type Inputs)
1. The Select elements type works a little different w/ focus (Please see the section: Select Tags)

<br><br>


### List of html elements (tags) by default w/ focus
- HTML Input elements `<input type="text">` or `<input type="radio">` etc
- HTML Select elements `<select>`
- HTML Textarea elements `<textarea>`
- HTML Anchor tags `<a>`
- HTML Buttons `<button>`

<br><br>

### Radio type Inputs
Focus works a little differently with Inputs w/ the type of `Radio`. A series of radio buttons are treated as one group that can have only one value at a time. This means that as you tab through a page, the focus will land on the radio group and only recongize the selected value. Then when you tab again, it will NOT tab through the individual radio button values, but it will go to the next focusable element in the page. 

<br><br>

### Select Tags
Focus works a little differently with the Select tag (it actually acts very much like Inputs w/ the type of `Radio`). A Select tag and it's options are treated as one group that can have only one value at a time. This means that as you tab through a page, the focus will land on the Select group and only recongize the selected value. Then when you tab again, it will NOT tab through the individual select options, but it will go to the next focusable element in the page. 

<br><br>

### tabindex

Overview - As I said above, You can add the attribute `tabindex` to html elements that aren't focusable by default and give the ability to focus on them.

#### How to use

1. Add the attribute `tabindex` to any html tag that you want to include in the focus element page hierarchy
1. Set a number vale to `tabindex`
    1. `tabindex = 0` == This is a default value and I think just by default puts it in the standard order of the rest of the focusable items on the page
    1. `tabindex = 1` == Any tabindex > 0 will jump a head of the natural order so most likely it will be the first focusable item
