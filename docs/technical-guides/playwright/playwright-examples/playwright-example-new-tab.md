# Playwright | Example | New Browser Tab

Summary - This is a working example or proof of concept on how to write a test case for testing that when a hyperlink is clicked a new browser tab opens. This will act as an exercise for a brain dumb of sorts in an effort to find the soluttion. 

<br>

#### Problem to Solve
Write a test in Typescript for the SRAM Chatbot project where you'll test that when a markdown hyperlink is clicked, a new browser tab opens 

<br>

#### Basic Parameters
1. Written with Playwright
1. Written in Typescript 
1. Can use Vitest

<br>



## Research

Summary - I googled "typescript playwright test link opening to new tab" to get an idea of what might be the solution. The code snippet below was something that came up.

<br>

### Research | Option 1

<br>

#### Option 1 Code (no steps)

```
import { test, expect } from '@playwright/test';

test('verify link opens in new tab', async ({ page, context }) => {
  await page.goto('https://example.com');

  const pagePromise = context.waitForEvent('page');
  
  await page.getByRole('link', { name: 'Open New Tab' }).click();

  const newPage = await pagePromise;

  await newPage.waitForLoadState();
  
  await expect(newPage).toHaveURL(/.*new-page-url/);
  
  await expect(newPage.locator('h1')).toContainText('Welcome to the new tab');

  await newPage.close();
});

```
<br>

#### Option 1 Code (w/ steps)


```
import { test, expect } from '@playwright/test';

test('verify link opens in new tab', async ({ page, context }) => {
  
  // Step 1  
  await page.goto('https://example.com');

  // Step 2 
  const pagePromise = context.waitForEvent('page');

  // Step 3 
  await page.getByRole('link', { name: 'Open New Tab' }).click();

  // Step 4 
  const newPage = await pagePromise;

  // Step 5 

    // Step 5a 
    await newPage.waitForLoadState();
  
    // Step 5b 
    await expect(newPage).toHaveURL(/.*new-page-url/);
  
    // Step 5c
    await expect(newPage.locator('h1')).toContainText('Welcome to the new tab');

  // Step 6 
  await newPage.close();
});

```

<br>

##### Breakdown of Logic

Step 1 == Go to your test page 

Step 2 == Setting a variable that's waiting for a specific event, which is a new page / tab

Step 3 == Find the link called "link" on the page and click it  

Step 4 == Not completely clear why this is needed. It's setting a new variable to a variable that's already set. So maybye creating an instance of it? s 

Step 5 == Interact with the new tab  
    - Step 5a == Wait for load state of the 'newPage'    
    - Step 5b == Verify newPage has a certain url  
    - Step 5c == Verify newPage has a specific H1  

Step 6 == Close new tab


<br><br><br>


### Research  | Option 2

<br>

#### Option 2 Code (no steps)

<br>

```
import { test, expect } from '@playwright/test'

test('clicking link opens new tab', async ({ page }) => {
  
  await page.goto('https://example.com')

  const [newPage] = await Promise.all([

    page.waitForEvent('popup'),

    page.getByRole('link', { name: 'Open Docs' }).click()
  ])

  await newPage.waitForLoadState()

  await expect(newPage).toHaveURL(/docs/)
})
```


<br>

#### Option 2 Code (w/ Steps)

```
// Step 1
import { test, expect } from '@playwright/test'

// Step 2
test('clicking link opens new tab', async ({ page }) => {
  
  // Step 3
  await page.goto('https://example.com')

  // Step 4
  const [newPage] = await Promise.all([

    // Step 4a
    page.waitForEvent('popup'),

    // Step 4b
    page.getByRole('link', { name: 'Open Docs' }).click()
  ])

  // Step 5
  await newPage.waitForLoadState()

  // Step 6
  await expect(newPage).toHaveURL(/docs/)
})
```

<br>

##### Breakdown of Logic

Step 1 == Import "test" and "expect" modules from Playwright

Step 2 == Create new test function called "Clicking link opens new tab" and pass in {page} object

Step 3 == Go to your test page

Step 4 == Create a new variable that's a container for the new page. `Promise.all` is a JavaScript method that lets you run multiple async operations at the same time and wait for all of them to finish. If one fails then all of them fail.  

    - Step 4a == Using the "page" object we want to WAIT for an event to happen, that's referred to as 'popup' -- Q: I don't know if that's the name of the object  

    - Step 4b == Fine the hyperlink called 'link' and click it  

Step 5 == For the `newPage` variable use the `waitForLoadState()` function to wait for the page to load

Step 6 == Verify that the `newPage` has a specific URL 


<br><br>

## Testing Practice

Summary - The below represents you trying some different options for testing the "new tab" test script'; again for Playwright and written in Typescript 

<br> 

### Testing Option 1 | Failed!

<br>

#### Testing Option 1 (no steps)

```
const link = page.getByRole('link', { name: 'Open Google' });

const [newPage] = await Promise.all([
    expect(await link.isVisible()).toBe(true),
    await link.click(),
    page.waitForEvent('popup'),
    expect(page.url).toBe('https://www.google.com'),
]);
```

<br>

#### Testing Option 1 (w/ steps)

```
// Step 1
const link = page.getByRole('link', { name: 'Open Google' });

// Step 2
const [newPage] = await Promise.all([

    // Step 3
    expect(await link.isVisible()).toBe(true),

    // Step 4
    await link.click(),

    // Step 5
    page.waitForEvent('popup'),

    // Step 6
    expect(page.url).toBe('https://www.google.com'),
]);

```
##### Breakdown

Step 1 == Find the link on the page with the label "Open Google" and set it to a variable  

Step 2 == Create a new array (variable) that's set to the name 'newPage' that's a `Promise.all()` type.  
'newPage' is a custom name and thus could be anything you want.  
`Promise.all()` is a Javascript method that allows for multiple operations to run and then wait for them to finish. If one fails then they all fail.

Step 3 == Wait for the variable called `link`, which is looking for a hyperlink, to be true

Step 4 == Click the `link` hyperlink

Step 5 == From the `link` that was clicked, wait for the new window to open (popup)

<br><br>

##### Outcome / Why it failed

Though this all seems well thought out, I was having an error where "newPage" still needed to be called or "activated" as I would say. So I created this array w/ the Promise.all type, but then nothing was calling it. I tried writing something to call the array but all of that kept failing. So I decided to take all of the promises / instructions out of the Promise.All and went forward with Option 2

<br><br><br>

### Testing Option 2 | Worked!

<br>

#### Testing Option 2 (no steps)

```
const link = page.getByRole('link', { name: 'Open Google' });
expect(await link.isVisible()).toBe(true);
await link.click();
page.waitForEvent('popup');
```
<br>

#### Active Option 2 w/ Steps
```
// Step 1
const link = page.getByRole('link', { name: 'Open Google' });

// Step 2
expect(await link.isVisible()).toBe(true);

// Step 3
await link.click();

// Step 4
page.waitForEvent('popup');
```
##### Breakdown

Step 1 == Find the link on the page with the label "Open Google" and set it to a variable named "link"  

Step 2 == Using the `expect()` function and `await`, wait until the "link" variable is true  

Step 3 == When it is then click the "link"  

Step 4 == Wait for the page event of `popup` occurs which is the new tab from the link


<br><br>

#### What hasn't worked yet

```
expect(page.url).toBe('https://www.google.com');
```

##### Breakdown

I wanted to also test if the new tab (or popup) went to the correct URL but I just didn't get this working right