# Sramconnect | Environment | Start

Summary - As of 2025-11-25 the process to which to start a local Connect (.COM) dev environment has changed and I wanted to capture those changes

<br/>

> :warning: **Prerequisites:**   
>1. sramconnect repo downloaded on local machine
>2. Project is installed on your local machine
>3. You have VS Code
>4. You have Visual Studio


## Steps
1. Make sure that you have the latest of the `dev-axle` branch

1. Open Visual Studio

1. Go to: `Build > Rebuild Solution`

1. In a Windows Explorer instance go to the project folder for sramconnect

1. Go to the .dev folder

1. Notice there are two files you’re going to want to run
    1. run-azurite
    1. run-iisexpress 

![Image from images folder](/sram-dev/sramconnect/sramconnect-start-env/run-connect-batch-files.png)

<br>

7. Double click on: `run-azurite`  
Note: A terminal window will open up and run the script

8. Double click on: `run-iisexpress`  
Note: A terminal window will open up and run the script

9. To open up a local instance of sram.com look at your task manager in lower right corner of screen and find the IIS Express icon. Right click on it. Notice that Sram is listed
![Image from images folder](/sram-dev/sramconnect/sramconnect-start-env/run-connect-iis-instance.png)

<br>

10. Click on Sram and optional local instance 
![Image from images folder](/sram-dev/sramconnect/sramconnect-start-env/run-connect-sram-local-instance.png)

<br>

11. Click on it to open it in your browser

<br>


> :warning: **WARNING:** You might see issues in your browser with the site not coming up OR that the site is unsafe. You might have to add `https` to the url!   
![Image from images folder](/sram-dev/sramconnect/sramconnect-start-env/site-cant-be-reached.png)
