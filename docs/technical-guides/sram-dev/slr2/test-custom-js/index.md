# slr2 | Test Custom Javascript

Summary - In your local slr2 environment how can write custom Javascript on the fly and test it

#### Real World Example
You had made Javascript changes locally in sram-ui that you wanted to test on your local slr2 environment without having to merge the local sram-ui changes in Github, then update the sram-ui version in local slr2, and install those changes. This is a work around where you can edit Javascript directly in slr2 and test your changes.

<br>

### Steps
1. In slr2 find the file
```
\slr2\slr2.web\src\main.js
```
2. At the end of the file add your custom Javascript
```
import { SramDocumentTemplate, SramErrorPage } from '@sramplm/sram-ui'
import '../node_modules/@sramplm/sram-ui/dist/style.css'

import * as Vue from 'vue';
export{
    Vue, 
    SramDocumentTemplate,
    SramErrorPage,
}

console.log("This is a test!");
```
3. From your terminal make sure you're in the slr2.web directory
```
/slr2/slr2.web
```
4. Run the following command that will run an npm build for the dev environment 
```
npm run build -dev
```

