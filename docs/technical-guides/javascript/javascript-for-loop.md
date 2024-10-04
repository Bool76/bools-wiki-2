# Javascript For Loop

<br>

### Requirements
1. Counter:
    1. It's the variable that keeps track fo the current iteration the program is working through
    1. You need to give it what number to start from
    1. You can think of it like an index
1. How Long (Condition) - You must indicate how many times the loop should cycle through. (aka - You'll execute the loop until those parameters aren't met)
1. Increments - How will the For Loop move through the counter? One at a time? Two at a time? etc.


<br><br>



*Example*
```js
for(var i = 0; i < selectDropDown.length; i++){
    selectDropDown[i].selectedIndex = -1;
}  
```

Counter: `let i=0`  
How long: `i < seelectDropDown.length`  
Increments: `i++`


1. Create a counter: `var i=01`
- `i` is a commonly used var name as it stands for index
- You can use any variable name that you want though - It doesn't need to be `i`
- `i=0` - Identifies that the counter starts at 0


<br><br><br>

### "For Loop" for a limited number of times

<br>

Overview - Show a "For Loop" loops over 3 times

*Example*
```js
for(let i=0; i <= 2; i++){
    selectDropDown[i].selectedIndex = -1;
} 
```

Counter: `let i=0`  
How long: `i <= 2`  
Increments: `i++`

*Breakdown*
1. `let` is used instead of `var` - At this time I don't know if it matters
1. `i` is the variable used for the counter
1. `i=0` the counter starts at 0
1. `i <= 2` this parameter limits the counter to 2. 
1. Q - How many times does it cycle through? ANS: 3! <br> Because the counter started at 0. Which means 0, 1, 2
