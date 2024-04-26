# CSS | Flexbox

Overview - [draft] The basics of how to use Flexbox

#### When to use it

Better for one dimensional applications. If you want something to work with more rows then I would checkout Flex Grid.

<br/>

#### Basic Concepts

**Flexbox Container** - Not an offical term but will be used to reference the main container for Flexbox

**Flex Items** - All objects (divs, buttons, etc) inside of a Flexbox container become _Flex Items_

<br/><br>

### Basic Setup

1. A main Flexbox container must be selected
1. The main Flexbox container must have a display type of `flex`

```
display: flex;
```

3. All of the items in the main Flexbox container will become "flex items"

<br/><br>

### Attributes

| Attribute       | Location            | Value          | Description                                                                                               |
| --------------- | ------------------- | -------------- | --------------------------------------------------------------------------------------------------------- |
| display         | Main flex container | flex           | Sets container as a flex type and it's children as flex items                                             |
| flex-direction  | Main flex container |                | Establishes the arrangement of flex items. Row vs Columns.                                                |
|                 |                     | row            | Arranges flex items in a row format (default)                                                             |
|                 |                     | column         | Arranges flex items in a column format                                                                    |
| flex-grow       | Flex Items          |                | Identifies how flex items will adjust to the space available in the main flex container                   |
|                 |                     | 0              | All flex item sizes will vary depending on their content                                                  |
|                 |                     | 1              | All flex item sizes will be the same size in order to fill up the entire size of the Main Flex container  |
|                 |                     | 2              | When you want only 2 flex items per row                                                                   |
|                 |                     | _mixed_        | Individual Flex Items can have different number values. This changes the sizes on those individual items. |
| justify-content | Main flex container |                | Defines the alignment of content (flex items) based on x axis                                             |
|                 |                     | flex-start     | Aligns content to the left                                                                                |
|                 |                     | flex-end       | Aligns content to the right                                                                               |
|                 |                     | center         | Aligns content in the middle                                                                              |
|                 |                     | space-between  | Items are evenly distributed in the row. First item on far left and last item is far right                |
|                 |                     | space-evenly   | Items are distributed so that the spacing between any two items (and the space to the edges) is equal     |
| align-items     | Main flex container |                | Defines the alignment of content (flex items) based on y axis                                             |
|                 |                     | stretch        | Flex items stretch to fill the entire height of the main flex container (default)                         |
|                 |                     | center         | Flex items will be positioned in the middle of the y axis                                                 |
|                 |                     | flex-end       | Flex items are placed at the bottom of the y axis                                                         |
| flex-wrap       | Main flex container |                | How content is handled if there's more content that will normally allow in a row or column                |
|                 |                     | nowrap         | All Flex Items will be on one line (default)                                                              |
|                 |                     | wrap           | Flex Items will wrap onto multiple lines, from top to bottom                                              |
|                 |                     | wrap-reverse   | Flex Items will wrap onto multiple lines from bottom to top                                               |
| flex            | Main flex container |                | To be used as a shortcut and includes: flex-grow, flex-basis, flex-shrink                                 |
|                 |                     | flex: 2 1 auto | BREAKDOWN: flex-grow: 2, flex-basis: 1, flex-shrink: auto                                                 |
