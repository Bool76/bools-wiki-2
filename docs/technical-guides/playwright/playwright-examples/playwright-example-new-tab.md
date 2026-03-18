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



### Option 1

Summary - I googled "typescript playwright test link opening to new tab" to get an idea of what might be the solution. The code snippet below was something that came up.

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


### Option 2

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

