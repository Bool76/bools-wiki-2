# Javascript + Jquery Book

Overview - Breaking down some basic important concepts to remember about Javascript

### Basic Concepts

**Variables**

**Arrays**

**Objects**

**Expressions**

**Operators**

<br>

### General Notes

### Objects

Can have:

- Properties
- Methods
- Events

<br>

Cont.

- Each property will have a name and a value. You can also call this "name" a "key"
- An event is like saying "Hey this just happened"
- You can respond to an Event
- Also you might want to think of Events as a way to interact with an object OR to notify when something needs to happen
- An event can be used to then fire off some sort of additional code or Method
  _Example_

```
Someone books a motel room online. The event might be the booking occuring, that event might trigger a method to run that would update the total number of rooms available
```

Methods can also interact with an Object. Updating or changing property values for example.

#### Objects

- Remember that JS is all about interacting with what you see on the screen

Types of Objects:

1. Window Object == The browser
1. Document Object == Current webpage that's loaded in the browser

- Object have properties and by identifying properties could be the way that you interact with the browser or page

<br>

Window Object Property Example == Location -> Which can grab the URL

```javascript
window.location;
```

Document Object Property Example == Title -> Which can grab the title of the page

```javascript
document.title;
```

<br>

Utilizing the Document Object can not only control the content that's seen but also control how a user interacts with it

<br><br>
