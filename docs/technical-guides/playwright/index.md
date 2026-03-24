# Playwright

<br>

## Overview

Summary - Notes on the basics of Playwright. I'm sure this will be more structured as I go along.  

- Free and open source (by Microsoft)

- Testing app that can test web browser applications

- Also API testing

- Different languages: Javascript, Typescript, and more

- Tied to the Node JS library

- Chromium - Is a web site engine that powers broswers like Chrome (you moron)

<br>

### Features
1. Free and Open Source

1. Multi-Browser support

1. Easy setup and config

1. Types of testing: 

    1. Functional
    1. Accessibility
    1. API

1. Build in Reports

1. CI / CD and Docker support

1. Recording

1. Debugging

1. Parallel Testing - Test multiple browsers at once

1. Custom timeouts 

1. Logs

1. Screenshots 

1. Videos

1. New tab support - If you want to test if link is opening up to new tab

1. Emulate mobile devices (also able to preset a viewport for a specific test)


<br><br>

### Playwright Tutorial(s), Videos, and Other Links

https://www.youtube.com/watch?v=4_m3HsaNwOE&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8  

https://automationstepbystep.com/ - This is the gentleman's website that does the Youtube channel above. There could be useful information in there.  

https://github.com/microsoft/playwright

<br><br>

### Install Notes

Summary - You can use Node.js, Python, Java, and .Net to install (I would say typically you're going to use Node.js).  

You can check out this link for more information: https://playwright.dev/  

<br>

1. You'll have to make sure that you have `npm` and `node` installed on your machine. You can check by running:  
```
npm --version
```

and 

```
node --version
```

2. Use VS Code IDE

3. Install Playwright: 
    1. Use VS Code extension
    1. Use npm

    NOTE: Theu show that once Playwright is installed there should be a `playwright.config.js` file - However in our usage of it in Chatbot I don't see this

    NOTE 2: Seems like regarding the Chatbot project for SRAM, we might not have approached the install in the same way. Again I don't see the expected config files and or the VS Extension


<br><br>

### General Thoughts / Questions
1. The SRAM team doesn't seem to be using the VS Code extension - Don't know why

1. The ChatBot SRAM project doesn't seem to have the typical installation of Playwright. Don't know why. 

1. Regarding ChatBot SRAM project - I don't know what browsers they've installed to test (Cause if you recall you should be specifying browsers upon install of Playwright)