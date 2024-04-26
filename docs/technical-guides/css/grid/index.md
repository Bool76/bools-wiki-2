# CSS | Grid

Overview - New approach to content layouts by a grid / table type display

<br>

#### Basic Building Concept

The number of columns desplayed in the grid layout is mainly controlled by the number of measurements listed for the `grid-template-columns` attribute  
(e.g. `grid-template-columns: 10px 10px` == 2 columns)  

<br>

#### When to use it

When a design calls for a simple grid layout / table of content and it makes more sense to use this rather than Flexbox

<br/>

#### Basic Terms

Grid Container - Main / parent container of the Grid

Grid Item - Children of the Grid Container

Grid Line - Dividing lines that make up the Grid structure that can be either vertical (column grid lines) or horizontal (row grid lines)

Grid Cell - Single unit of the Grid (think of it like a table cell)

Grid Track - The general term for either a grid row or a grid column

<br/><br>

### Basic Setup

1. Define a main container as a Grid Container w/ the use of `display: grid`
1. Set the number of columns and their size w/ the attribute `grid-template-column`
1. (Optional) Set row size w/ the attribute `grid-template-row`
1. Place child elements into the grid w/ `grid-row` and `grid-column`

```
display: flex;
```

<br/><br>

### Attributes

| Attribute             | Location       | Value       | Description                                                                                             |
| --------------------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| display               | Grid Container | grid        | Designates a container as a Grid Container (parent container of the Grid)                               |
| display               | Grid Container | inline-grid | Generates an inline-level grid.                                                                         |
| grid-template-rows    | Grid Container | px, %       | Use when you want a specific row height. Otherwise don't use this and it will be based on content.       |
| grid-template-columns | Grid Container | px, %, auto | Specify the number of columns you want by listing all of their separate widths                          |
| grid-row              | Grid Item      |             | A row oriented control - Specify a grid item's row size and location (e.g. Make item span 2 rows)       |
| grid-column           | Grid Item      |             | A column oriented control - Specify a grid item's column size and location (e.g. Make item span 2 cols) |
| column-gap            | Grid Container |             | Formats space between columns                                                                           |
| row-gap               | Grid Container |             | Formats space between rows                                                                              |
| gap                   | Grid Container |             | Short hand for `row-gap` and `column-gap`                                                               |

<br><br>


### grid-template-columns


**Standard Usage**  
```
grid-template-columns: 25% 25% 25% 25%;
```
<br>

**Shortcut**
```
grid-template-columns: repeat(4, 25%);
```

<br><br>

### fr Units

Unit of measurement that's more effective than px or %. Stands for "fraction” unit. This measurement will take in account any column-gap that's used so you don't have to worry about content being pushed out of the Grid.

Look at the [Grid Template Column](/css/grid/grid-template-column/) article for additional information