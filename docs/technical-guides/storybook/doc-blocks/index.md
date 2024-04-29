# Storybook | Doc Blocks

Overview - The variety of Doc Blocks give the ability to document, share UI components with generated interface documentation, and the source code that creates those components.


Doc Blocks are used in MDX files. 

<br>

### List of possible Doc Blocks: 
1. Title
1. Meta
1. Story
1. Canvas 
1. Source

<br>

### How to use
1. Select a Doc Block(s) you'd like to use
1. Use `import` and with a object based called, list out the Doc Block you want to use and pull from it's location 

> :memo: **Note:**  As of this documentation they are located in "storybook/addon-docs" 

```
import { Meta, Story } from '@storybook/addon-docs';
```

