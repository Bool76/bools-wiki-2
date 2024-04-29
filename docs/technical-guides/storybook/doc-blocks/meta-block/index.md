# Storybook | Meta Block

Overview - Used in MDX file. It does the following:
1. Controls the sidebar navigation title
1. Attaches MDX file to a component and it's Stories  
1. Controls location of unattached documentation in the sidebar (nav)

<br>

### How to use it?
1. In order to use "Meta" it must be imported 
```
import { Meta } from '@storybook/addon-docs';
```

<br>

### Control the sidebar nav title
1. What is the name you want to give it so it will appear that way in the sidebar? 
1. Recognize the hierarchy of the component you're working with (e.g. Atom, Molecule, etc)
1. Use the Meta tag and for the above answers fill out the `title` property like so:
```mdx
<Meta title="Atoms / Button" />
```

<br>

### Attache MDX file to a Component's Story
1. You must know the name of the component you're working with
1. Use the Meta tag and set the `component` property to the name of the component
```mdx
<Meta title="Atoms / Button Asdf" component={SramButton} />
```
3. In the above example the component is set to `SramButton`
