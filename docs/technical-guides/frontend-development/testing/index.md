# Frontend Development | Testing

Overview - General research related to how to do Testing, Unit Testing, Smoke Testing, "In memory testing" as a frontend developer 

### Research Notes

- Testing is better done with a code base that has separate components that can act alone so that they can be tested alone
- W/ that you might have to "mock" any call to another component or to a database if you need some sort of external interaction
- A component should do one thing and thus you're testing just for that one thing. This reduces complexity in your tests and helps reduce how many variables you might have to consider. 
- Tests (that looks like classes) should have a semi descriptive name as to what you expect. Or have some sort of piece to it that is descriptive.
- When considering tests to write you could think of the following:
    - What variable type are you expecting?
    - If a variable should equal a specific value then is it that value? 
    - If you have multiple variables being set then you could write a unit test per variable
    - Though I'm sure testing on some sort of hard coded value might not be the best of practices? I don't know. 
- When running tests it seems like you might be running a specific script to test your code so that means it's not running all the time. Don't know if that's what we are doing or not.
- Keep in mind  you could consider writing your test first and then the actual function or whatever. This would be called **Test Driven Development** 