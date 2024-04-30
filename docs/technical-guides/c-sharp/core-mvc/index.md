# C# | Core MVC

Overview - This section covers the web app development tool from .Net

### Scripts

| Description             | Script         | Notes                                      |
| ----------------------- | -------------- | ------------------------------------------ |
| Start local environment | `dotnet watch` | Also use when you want to see changes made |

<br>

### Basic Concepts

- Exercises the use of the model, view, controller (MVC)  
  Model == Data (business logic)  
  Controller == Reponse to user interaction  
  View == Frontend user interface
- When you make changes to your app it seems like you have to stop the current instance and start it back up again: `dotnet watch`

<br><br>

### Controllers

The controller retrieves data from a data source and decides what type of response to send back to the browser.     

#### Methods & Classes in Controllers

Every method that has been deemed to be public, is callable as an HTTP endpoint

Controller methods are also called *Action Methods*

A controller class is where the code is written that handles the incoming browser requests.

*NOTE:  A method is a function that is associated with a class.Jan 9, 2023*


#### Controller's URLs

Controller actions are invoked in response to an incoming URL request

The default URL routing logic used by MVC, uses a format like this to determine what code to invoke:

URL Format:

```
/[Controller]/[ActionName]/[Parameters]
```

<br>

URL Example:

```
http://localhost:5038/helloworld/welcome
```

`helloworld` == The first part of the URL segment determines what controller class that will be run

`welcome` == The second part of the URL segment determines the action method on the class

_parameters_ == No parameters have been used

<br>

#### viewData 

viewData (or viewData Dictionary) - A dictionary object in .NET Core MVC. It's a dynamic object. No defined properties until something is added.

 As it is a dictionary object, it will store the data in the form of Key-Value Pairs where each key must be a string, and the value that we pass to the dictionary will be stored as an object type  

 The ViewData dictionary object contains data that will be passed to the view.



<br><br>

### View Files

A view template should work only with the data that's provided to it by the controller


<br><br>

### Razor Files
- has a `cshtml` file extension
- Creates html output with C# logic