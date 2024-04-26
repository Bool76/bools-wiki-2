# C# | Model + View + Controller

Overview - How to use the Model, View, Controller (+ ViewModel) in C#. How the files interact and how to use them with a desired goal 


<span class="warning">This page needs to be worked on! Start removing sections into separate sub sections (e.g. Controllers, Views, View Models)</span>

<br/>

### File Type Descriptions

**Model** - Instance of single source data (e.g. Instance of content through the CMS)  

**Controller** - Given the ability to alter data and then submit (make available) the data to the Model or the ViewModel (whichever one is going to use it) 

**View Model** - asdf  

**View** - Display page seen by a user (e.g. asdf.html)

<br/>

### Workflow Overview

1. _Browser_ requests page from _Controller_  
2. _Controller_ 
    1. Can reference data  from either a _Model_ source or a _ViewModel_ source and manipulate it 
    2. Can instruct how to make changes to data
    3. Saves that data into a new data object to be used by the View  
    Q - Are you telling it what to do with the data and not saving it really
    4. At the end it points to the _View_ that will be served up to the _Browser_  
3. _View_
    1. Points to the _Model_ data source or _ViewModel_ data source because it still needs to know where the data is coming from (_Controller_ creates the structure for the data, including any changes to the data, but the _View_ still needs to know where the data is coming from)
    2. Static html can be displayed
    3. Dynamic calls to data are made:
        1. Calls must match the data object structure that was created in the _Controller_ 
        2. From the `@model SegmentedControlsViewModel` call, the _View_ still knows where to get the actual data
    4. User sees dynamic data

<br/>

### Key Concepts
1. There is no direct correspondence between the URL that you type into your browser's address bar and the html files
1. The URL corresponds to a Controller

### Questions
1. **Controllers** - Does the URL correspond to a _Controller_ file of the same name or does it some how invoke every method w/ the name that corresponds to the URL? 

e.g. 

OPTION 1  
URL: www.asdf.com/about  
 
1. Looks for any Controller that has a `public ActionResult about()` 
2. Runs the code inside of that method
3. Code in that method points to a _View_ file

OPTION 2  
URL: www.asdf.com/about  
 
1. Looks for any Controller that has a corresponding file name of `AboutController.cs`
1. If that _Controller_ has a `public ActionResult about()`, then it will run the code in that method and point the Browser to the `about` _View_ file