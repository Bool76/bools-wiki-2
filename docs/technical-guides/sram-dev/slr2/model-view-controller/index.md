# slr2 | Model View Controller

Summary - Overview of how the Model View Controller structure works in slr2

#### Views

File Type === cshtml file  
Location === slr2.web > Views

#### Controllers

File Type === cs  
Location === slr2.web > Controllers

#### Models

File Type === cs  
Location === slr2.web > Services > Models

### Example of common directory / file heirarchy

**_slr2.web:_**  
-> **Models**  
--> Publication  
---> PublicationViewModel.cs

-> **Services**  
--> Models  
---> SramPublication.cs  
--> PublicationMappingService.cs

-> **Views**  
--> Contentful  
---> Index.cshtml  
--> Shared  
---> Layout.cshtml

### Further Details

**Models / Publication**  
Summary - Instance of a model is created so that it can be used. Alex called this the Presentation Model  
_Example: PublicationViewModel.cs_

- Creates an object called "PublicationViewModel"
- Attributes are identified that make it up
- Those attributes are identified to come from a JSON source

**Services / Model**  
Summary - Creates a data object to call. It provides stored data for the Presendation Models to call and use. Alex called these Perisistance Models  
_Example: ContentfulObjects.cs_

- Creates an instance of PublicationViewModel that a presentation layer can use (e.g. \_layer.cshtml)

**Views**  
Summary - Frontend layer that displays content  
_Example: \_layout.cshtml_

- Is directly calling / using the attribute from the "Model" object
- Is calling "Model.MetaDescription

QUESTION - But how does it have access to it?
