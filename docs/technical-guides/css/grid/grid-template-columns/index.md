# CSS | grid-template-columns

Overview - For the Grid layout - Set the number of columns and their size w/ the attribute `grid-template-column`

<br>


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

### "grid-template-columns" Sizes are Stupid

What do I mean by this? When you use percentages for column width sizes and you add a `column-gap`, Grid won't configure the `column-gap` as part of the 100% width. Therefore with the combination of the column widths and the `column-gap` it will push the content beyond the Grid. Hence they are stupid. 

What can you do? 

Use the `fr` measurement rather than a percentage

<br><br>

### fr Unit 

Unit of measurement that's more effective than px or %. Stands for "fraction” unit. This measurement will take in account any `column-gap` that's used so you don't have to worry about content being pushed out of the Grid. 

#### Basic fr Example

```
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
}
```
**Breakdown**

- `repeat(4, 1fr)` - 4 columns identified w/ and each taking up the same space
- `grid-column-gap: 10px;` - column gap is added but it won't change the overall width of the grid because of the use of `fr` units



<br><br>

#### fr Columns w/ additional column with custom size 

```
.grid {
  display: grid;
  grid-template-columns: 250px repeat(4, 1fr);
  grid-column-gap: 10px;
}
```

**Breakdown**
- `grid-template-columns: 250px` - One column has been identified that will be 250px wide
- `repeat(4, 1fr)` - 4 additional columns identified that will all take up the same space  