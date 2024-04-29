# slr2 | Url + PubId

Summary - This article is to help understand the slr2 URL in your local, stage, and production environment. Furthermore how to write a URL for your local environment.

### Understanding the URL 

#### Local Example
```
http://localhost:32673/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG
```
localhost == Indicates you're in local env  
32673 == Port number - This can change from time to time  
en-us == Selected language  
preview == In your local and stage, it works off of "preview" mode  
dev == The environment that's related to the pudID that's used  
pubId == In your local environment and stage, you need to pass in a pubId as a URL variable because your using the "preview" mode

> :memo: **Note:** A Stage url has the same basic structure as a local one  
> :memo: **Note:** See Production Example for how it's different  
> :memo: **Note:** When you need to get a new pubId please see section "How to get a pubId"

#### Production Example
```
https://docs-sram-com-app-prod.azurewebsites.net/de-DE/publications/5fIZnRHg4dwjA8CcjcbLLG
```
docs-sram-com-app-prod.azurewebsites.net == Production site  
de-DE == Language selected  
publications == Instead of using a pubId production uses "publications" in the url
5fIZnRHg4dwjA8CcjcbLLG == The pubId that's needed to point to a publication


<br>

### How to create a local URL to use?

What you'll need:
1. Local Port
2. Select an environment (dev, stage, master, prod)
3. PubId

#### Steps
1. Start local environment: From Visual Studio click on - IIS Express button
2. Browser will open with a generic banner: DOCS.SRAM.COM
3. Get local port: From the browser you'll see the port you're going to use so make note of it
4. Add the language you're going to use, add preview, and publication:
```   
/en-us/preview/publications/
```
5. Select an an environment either:
    1. dev
    2. stage
    3. master
6. Find a PubId to use through Contentful (go to the section "How to get a pubId")
7. Add the PubId at the end
8. This is what your url can look like:
```
http://localhost:32673/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG
```
<br>

### What environments can be used?
1. dev
2. master (though had issues w/ this working)
3. stage
4. prod -- I have to figure out how to do this!

<br>

### How to get a pubId?
1. Login to Contentful
2. Start from the Home page
3. Make the call on what env you want to grab the pubId from
4. Click - Hamburger menu
5. Expand - november2021
6. Click on the env you choose to work from
7. From the list - Click on a publication
8. On right hand side - Cick on Info 
9. Find the section - Entry ID
10. That's the pubID you're going to use 

<br>

### How to get a prod style URL on your local env
1. Make note of your local port:  
```
http://localhost:5147/
```
2. Make note of the NGM production URL:  
```
https://docs-sram-com-app-uat.azurewebsites.net/en-US/publications/1kIP2D86RC1symlNZ6qBzN/CAW%20Publication%20Test%201
```
3. From the production URL, copy the part of the URL starting from "en-us" and everything to the right. 
4. Tack that copied section and place it after your local port URL. It should look something like:  
```
http://localhost:5147/en-US/publications/32KXd13MZQ7SVBtT2Iimfu/UM%20-%20Flight%20Attendant
```