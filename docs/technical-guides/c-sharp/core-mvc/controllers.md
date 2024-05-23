# Core MVC | Controllers

## Random Notes

<br>

You can think of controllers like they are controlling a folder structure

More like "CVM"  
- You go through the Controller
- To the View
- In the View you'll see Model information


Where your app is entering in the file structure

To use Controllers you use URL in a web page

To get to a Controller you'll just place the name of the controller in the URL

```
www.asdf.com/cat
```

In the example above, the name of the controller in the controller file would look like `CatController`. But when you utilize it in the URL you don't need to add the suffix.


Controllers are like where you're entering into the app

Controller is a class in ASP

Controllers are responsible for responding to requests made against an ASP.NET MVC website


A controller can then have multiple endpoints  	
Examples of different action method that you might see in one controller:
- User registration
- User sign in

Will respond based the the input data that's passed into it. Creating a response. Sending it back to the client. 

All controllers have an end point. 

Q - I don't know if there can be more than one end point? For example if each Action can have it's own end point  
ANS - I thnk that's true because I just added a note like that above. I'll just need to see an example and how it might work.


### Notable Parts of a Controller
1. Entry point
Q - What is an "entry point"? It might just be the folder structure. So in the URL instructs where to look for a file. In this case it's the Controller file. Maybe you could be thinking of that as the entry point. BUT... it's only where to look for further information. It's not some sort of html or view file. The Controller's end point will then tell the browser where else to go.  
2. End point


<br><br>

## Create a Controller

<br>

Reminder of Important Facts: 
- Controllers are public classes in ASP
- When declaring a controller it must include "Controller" in it's suffix
- Must use title case for name of controller

<br>

### Steps
1. You need to have a Controller directory in your project. Create one if it's not one there.
1. Create a file, using title case, with a unique name followed by the suffix of "Controller". It's also a `.cs` file
*Example*
```
AsdfController.cs
```
3. Declare your new controller likeyou would for any class. Again you must use your new unique name and the suffix of "Controller"

```
public class HomeController : Controller {
```
> :memo: **Note:** When you use "Controller" as the suffix of your class name, then ASP will recognize it as a Controller type class


<br><br>

## Action Methods

<br>

Action methods can also be called "actions"

A controller can have one to many action methods

Each action method acts as an endpoint

