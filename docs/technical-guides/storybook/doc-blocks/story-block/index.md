# Storybook | Story Block

Overview - To render stories in Storybook you'll need the Story Block. The Story block can be by itself or within a Canvas block.

<span class="warning">Fill this out more!</span>


> :memo: **Note:**  Quite often you'll see the Story Block wrapped in a Canvas Block

<br>

### Properties

**name** - Controls the name of a story for a component on the left nav

**args** - <span class="warning">TBD. Why do I need this and other args in an MDX file?</span>

<br>

### Standalone Story Block  
1. In order to use "Story" it must be imported 
```
import { Story } from '@storybook/addon-docs';
```
2. Import the component that you want to work with
```
import SramHeaderNav from ".";
```
3. You'll want to add a nav link on the left hand navigation so you'll need to use the Meta block. Import that block.
```
import { Story, Meta } from '@storybook/addon-docs';
```
4. Add the Meta block and include the section you want the componet to appear and the name of the component you want to work with
```
<Meta title="Atoms / Header Nav" component={SramHeaderNav} />
```
5. Create a `<Story>` block
6. Give the story a name by adding the `name` attribute.  Give the name attribute a value of what you want your story to be called (e.g. Default)  

```mdx
<Story 
    name="Default"
/>
```

<br>

**Result:**  
![Image from images folder](~@source/images/storybook/storybook-docBlocks/docBlock-story/story-block_standalone-example.png)

<br>

Breakdown:  
1. Notice that the Story has been added to the left nav in the Atom directory and has the component name of "Header Nav"
1. Within "Header Nav" component there's a story called "Default"
1. When you select the Default story that makes the component appear on the right side. Notice the "asdf". That's just a simple html block that the component has in it. 