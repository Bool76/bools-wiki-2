# Controller | ActionResult vs IActionResult

Overview - What is the difference between ActionResult and IActionResult in the Controller endpoint and when to use them


### ActionResult
Defines the endpoint for the Controller which is normally a View or a resource. Don't forget that in a Controller you can return or point to a View

```
public ActionResult Index() {

        return View();
    }
```

<br/>

### IActionResult
To be used when you want to customize the return response (e.g. Return an error state)