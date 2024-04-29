# Markdown | Footnotes

### Steps

_Sample Code_

```markdown
This is the start of a list:

1. List item one
1. List item two
1. List item three
```

<br>

1. Identify where in your Markdown code where you'd would like to add a footnote. Lets say you want to add it at the end of the second list item.
1. Now you need to know what numbered footnote is associated to that area. Lets say it's #2

```markdown
This is the start of a list:

1. List item one
1. List item two[^2]
1. List item three
```

3. Place a the number within square brackets, a caret, and the number.
4. Add the footnote to the bottom of your code with the same square bracket, caret, and number

```markdown
This is the start of a list:

1. List item one
1. List item two [^1]
1. List item three

[^1]: This is a footnote
```

<br>

> :warning: **Warning:** THIS DOESN'T SEEM TO WORK IN VUEPRESS!
