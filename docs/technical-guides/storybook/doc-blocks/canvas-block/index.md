# Storybook | Canvas Block

Overview - Is like Story and Source wrapped up into one. The section of Storybook where you can see the component in working form. It's also the first "page" you see when you click on a component in Storybook. It also comes with a small tool bar at the top, but I haven't ever used that.

<br>

![Image from images folder](~@source/images/storybook/storybook-basics/storybook-basics_canvas-01.png)

<br>

### How do you use it?  
1. In order to use "Canvas" it must be imported 
```
import { Canvas } from '@storybook/addon-docs';
```
2. Use the `<canvas>` tag in the MDX file 

1. Inside of `<canvas>` you'll see the `<story>` block

<br>

#### What blocks are typically in it?
1. `<story>`
1. `<source>`

<br>

### Pass in props
You can pass props into the Canvas block but I haven't done or seen anything with that
