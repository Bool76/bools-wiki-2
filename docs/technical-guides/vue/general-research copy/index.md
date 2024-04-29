# Vue | Event Handlers

Overview - tbd

<br> 

> :memo: **Note:** "Binding" is a good keyword to think of with the topic of event handlers. You have a bind or connection from some event that happens and code that will respond.


### v-on
Can be used to listen to DOM events and run some Javascript code when it's triggered.

```
<button v-on:click="handler">Add 1</button>
```

<br>

**v-on Shortcut** 

Use the `@` symbol:
```
<button @click="handler">Add 1</button>
```
<br>

Call method w/ `v-on`

```
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

<button @click="greet">Greet me</button>
```
<br>

Inline Handler w/ Argument

```function say(message) {
  alert(message)
}

<button @click="say("good bye")">Greeting</button>

```
<br>

### Emit

Pass data from parent to child with the help of `emit`

That keyword `emit` - Can I think of that like it's emitting a signal that something needs to happen?

```
<button @click="$emit('deleteItem', position)">Delete</button>
```

`@click` - Click handler  
`$emit` - Every time the button is clicked it's going to call the emit  
`deleteItem` - You have to call the emit something. Everytime it's clicked it's going to emit "deleteItem". You then need to listen for "deleteItem" somewhere so that when it's emitted something is waiting for it and thus when it hear it then it does something. That makes sense.  
`position` - You're going to pass along some data with that emitted event. That data is going to be "position"