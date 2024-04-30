# MVC | Example

Overview - tbd


<br/>

## Example

Overview - The goal of this example was to display both Zoo and Animal information on one View file when the data comes from different sources (Model files)


### Files

Zoo.cs  
 Animal.cs  
 HomeController.cs  
 Index.cshtml

<br/>

### File Overview

| Name              | Type       | Summary                        | Defined                              |
| ----------------- | ---------- | ------------------------------ | ------------------------------------ |
| Zoo.cs            | Model      | Retrieves specific data fields | ID (int)                             |
|                   |            |                                | City (string)                        |
| Animal.cs         | Model      | Retrieves specific data fields | ID (int)                             |
|                   |            |                                | Name (string)                        |
| HomeController.cs | Controller | tbd                            | List animals                         |
|                   |            |                                | List zoos                            |
| tbd               | ViewModel  |                                |                                      |
| Index.cshtml      | View       | Display page to the user       | Defined link to model (or ViewModel) |

<br/>


### Workflow Overview

1. _Browser_ requests page from _Controller_  
2. _Controller_ 
    1. Grabs data from either a _Model_ source or a _ViewModel_ source 
    2. Can make changes to data
    3. Saves that data into a new data object to be used by the View
    4. At the end it points to the _View_ that will be served up to the _Browser_  
3. _View_
    1. Points to the _Model_ data source or _ViewModel_ data source because it still needs to know where the data is coming from (_Controller_ creates the structure for the data, including any changes to the data, but the _View_ still needs to know where the data is coming from)
    2. Static html can be displayed
    3. Dynamic calls to data are made:
        1. Calls must match the data object structure that was created in the _Controller_ 
        2. From the `@model SegmentedControlsViewModel` call, the _View_ still knows where to get the actual data
    4. User sees dynamic data

<br/><br/>

### View File

**Purpose** - Displays the web page and calls data dynamically from either a Model or a View Model file

```
//index.cshtml [View File]

@model List<Animal>

@{
    viewData["Title"] = "Animal/Zoo Overiew";
}
<h2>Animals Name</h2>
<ul>
    @foreach(var animal in Model.Animals){
        <li>@animal.Name</li>
    }
</ul>

<h2>Zoo City</h2>
<ul>
    @foreach(var zoo in Model.Zoos){
        <li>@zoo.City</li>
    }
</ul>
```

<br/><br/>

### Model Files

**Purpose** - Pulls in original data required


```
// Zoo.cs [Model File]

namespace TutorialsEUVViewModels.Models
{
    public class Zoo
    {
        public int Id { get; set; }
        public string? City { get; set; }
    }
}
```

```
// Animal.cs [Model File]

namespace TutorialsEUViewModels.Models
{
    public class Animal
    {
        public int Id { get; set; }
        public string? Name { get; set; }
    }
}
```

Zoo.cs - Original data file that pulls information in for Zoo `ID` and Zoo `City`

Animal.cs - Original data file that pulls information in for Animal `ID` and Animal `Name`

<br/>

### View Model File

**Purpose** - The ViewModel file compiles the information from difference sources so that it can be called on

```
// AnimalZooViewData.cs [ViewModel File]

using TurorialsEUViewModels.Models;

public class AnimalZooViewData {
    public List<Animal> Animals (get; set;);
    public List<Zoo> Zoos (get; set;);
}

```

**Breakdown**

`using TurorialViewModels.Models;` == Allows for Model files and their data to be available for reference  
`public class AnimalZooViewData` == Creates the _ViewModel_ file with the class name of `AnimalZooViewData`  
`public List<Animal> Animals (get; set;)` - <span class="warning">VERIFY</span> Define a list called `Animal` from the Animals Model so you can use it in the View file 



define the properties (list) of the data that you're going to show

<br/><br/>

### Controller File

**Purpose** - [draft]

This needs to match the configuration that's in the ViewModel file (I think)

You have to submit the correct information to the View file (I think)

Somehow in the Controller you are returning the View

Submit the information of that ViewModel (or Model if that's what you're using) to the View so that it can be used

And how do you know what you're using? By looking at the top of the View file and seeing what is in the `using` statement

Controllers control what's entering the app

The name of the controller has to equal the name of the Model or ViewModel it's tied to (e.g. Model: asdf.cs Controller: asdfController.cs)

The Controller controls where it's entering (Controller endpoint)


```
// HomeController.cs [Controller File]

using TurorialsEUViewModels.ViewModels;

namespace TurorialsEUViewModels.Controllers

public class HomeController : Controller {
    private List<Animal> animals = new List<Animal>();

    private List<Zoo> zoos = new List<Zoo>();

    public IActionResult Index() {
        AnimalZooViewData vm = new AnimalZooViewData();
        vm.Animals = animals;
        vm.Zoos = zoos;

        return View(vm);
    }
}
```
**Breakdown**

`using TurorialViewModels.ViewModels` == So you have access to the data in the AnimalZooViewData.cs 

`namespace TutorialViewModels.Controllers` == Creates a relationship with this file and the other files with the namespace `TutorialViewModels.Controllers`

`public class HomeController : Controller` == Custom controller created with the name `HomeController` inheriting methods from the base class `Controller`  

`private List<Animal> animals = new List<Animal>();` == You need to inject data from the ViewModel into the Controller 

`public IActionResult Index() {}` ==   
* `IActionResult` Enables what's called the "controller endpoint" which controls where the _Controller_ will point to 
* `Index()` == Indicates what _View_ file the _Controller_ is to work with (it needs to work with a _View_ file because the purpose of the  _Controller_ is to point to some sort of display file)
* `Index` == The keyword that's used when you want to work with the _View_ file that has the same name as the _Controller_. The _Controller_ name corresponds to the _View_ dir that has the same name as the _Controller_  
(e.g. The SegmentedControlsController looks for a SegmentedControls dir in the View dir. Then looks for an Index file in the SegmentedControls dir)
* [wrong - alter this] Inside this statement you're returning the data that can be used by the View file.     
* [somewhat wrong - alter this] Since this data is coming from the ViewModel, what you're returning must reflect how it looks in the ViewModel


`AnimalZooViewData vm` == I don't know what this is doing. We're going to be referencing `vm` as the name of the ViewModel object. But that entire string is using `AnimalZooViewData` twice. Why?   

`AnimalZooViewData vm = new AnimalZooViewData()` == Creating a new instance of AnimalZooViewData  

`return View(vm)` == Indicates what the endpoint is. This will point to the _View_ file for the _View_ directory that has the same name as the _Controller_ (Because it's using the `Index()`) There are other options for `return` but don't know them right now.


### <span class="warning">Controllers - What I need to know</span>
1. Do I need to create some sort of `private` list for each of my sources?  
e.g. AnimalsList and ZoosList
1. Do the lists even need to be `private`?
1. In the _Controller_ what keyword is that binding agent which ties to the _ViewModel_ data (e.g. Zoos) that allows the _Controller_ to use it or reference it? 




