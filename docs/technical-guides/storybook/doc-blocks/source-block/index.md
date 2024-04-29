# Storybook | Source Block

Overview - Creates the ability to see the source code / a copy and pasteable snippet used to produce that story.You can use a Source block by itself or typically it's seen wrapped in a Canvas block (also with a Story block).



### Properties

**language** 

**code**

**dark** - Not so much of a property as much as this can identify the type of theme you want to use

<br><br>


### Standalone Source Block  
1. In order to use "Source" it must be imported 
```
import { Source } from '@storybook/addon-docs';
```
2. Import the component that you want to work with
```
import SramHeaderNav from ".";
```
3. You'll want to add a nav link on the left hand navigation so you'll need to use the Meta block. Import that block.
```
import { Source, Meta } from '@storybook/addon-docs';
```
4. Add the Meta block and include the section you want the componet to appear and the name of the component you want to work with
```
<Meta title="Atoms / Header Nav" component={SramHeaderNav} />
```

5. Create a `<Source>` block
6. Set the "language" attribute to what type of code it is (e.g. `langauge='html'`) 
7. Place the code you want to display inside of the code attribute

Example:

```mdx
<Source 
  language='html'
  dark
  code={`<SramHeaderNav>
    </SramHeaderNav>`}>
</Source>
```
Breakdown:

`language='html'` == Defines the type of code used in the sample code  
`dark` == Applies a dark theme to the code block so it's easier to read  
`code={}` == Inside of the object place the working code for the component you're representing

<br>

Result:

![Image from images folder](~@source/images/storybook/storybook-docBlocks/docBlock-source/story-block_standalone-example.png)
