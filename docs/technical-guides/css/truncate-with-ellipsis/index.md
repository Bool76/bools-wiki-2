# Truncate with Ellipsis

Summary - How through CSS do you truncate a single row of text with ellipsis

### Example

```
.box {
	width: 450px;
	margin: auto; 
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	font-size: 2rem;
}
```
Notice the use of:
- white-space
- overflow 
- text-overflow

> :warning: **Warning:** This can only be used to truncate a single row!