# C# | Any() Method

Summary - Method used to check if condition is true

#### Example 1

Scenario - Check if there is any value in an object

```
@if (Model.Specs.Specs.Any())
    {
        <p>
            Display some text
        </p>
    }
```

#### Example 2

Scenario - Check if specific condition is true

```
@if (numberVar.Any(s =>10))
    {
        <p>
            Display some text
        </p>
    }
```
