# Next Gen Manuals

Summary - Here’s a general guide on how to work w/ Next Gen Manuals locally. This covers topics like:

- How to install env and run it

- How to open a local project

- How to see a publication locally

<br><br>

## How to Install Env and Run

1. Open Visual Studio (not VS Code)

1. File > Open > Project / Solution 

1. Select the file: NextGenManuals.sln

1. Open a terminal window (like in VS Code)

1. Navigate to the NGM project

1. Part of this project uses the SRAM-UI library that's Vue based. We need to install that

1. Go to the directory: NextGenManuals.Web

1. Run: `npm install`

1. Go to Visual Studio

1. Click the start button for IIS Express

   ![Image from images folder](/sram-dev/next-gen-manuals/start-iis-express.png)

1. Browser should open up with a splash page saying that this was successful. In order to now see a local example of a publication go to the section “How to see Publication Locally” 

<br><br>

## How to Open Local Project and Start

1. Open Visual Studio

1. File > Open > Project / Solution 

1. Select the file: NextGenManuals.sln

1. Click the IIS Express button
![Image from images folder](/sram-dev/next-gen-manuals/start-iis-express.png)

<br><br>

## How to see Publication Locally

Summary - Locally you can look at any published guide. 

1. Start the project locally

1. Find a production publication that you’d like to use locally  
ie - https://docs.sram.com/en-US/publications/2eIzVnWuTRM7vhoKQjadQr

1. From the url, copy from “en-US” and on  
ie - /en-US/publications/2eIzVnWuTRM7vhoKQjadQr

1. Attach it to your local instance  
ie - https://localhost:44338/en-US/publications/2eIzVnWuTRM7vhoKQjadQr

<br><br>

## How to Install updated SRAM-UI library

Summary - In case you need to install the latest version of the SRAM-UI library please do the following

> :warning: **Warning:** You could get an error from the first option OR not see the expected changes. Make sure that the sram-ui project went through a build first before it was merged. ALSO make sure that the sram-ui project merge has completed.

<br>

### Option 1 | Update Version Number

1. Go to the `package.json` file found in the NextGenManuals.Web directory
1. Find the entry for `@sramplm/sram-ui`
1. Update the version number to the number that you want (you might need to refer to the sram-ui project)
1. Go to a terminal window
1. Go to the directory: NextGenManuals.Web
1. Run: `npm install`
1. Stop the instance of the project (if it's running)
1. Go to Visual Studio
1. Click the Stop icon
1. Start the instance back up
1. Click the start button for IIS Express
1. You should now see your changes

<br>

### Option 2 | Just run npm install

Summary- By theory you should just have to run the npm in stall and not have to increase the version number because of the way the dependency is written in the package.json file

1. Go to the package.json file found in the NextGenManuals.Web directory
1. Find the entry for `@sramplm/sram-ui`
1. Notice that the version number is written like this: `"^1.0.66"` - I starts with a carrot which means "Install this version or greater"
1. Go to a terminal window
1. Go to the directory: NextGenManuals.Web
1. Run: `npm install`
1. Stop the instance of the project (if it's running)
1. Go to Visual Studio
1. Click the Stop icon
1. Start the instance back up
1. Click the start button for IIS Express
1. You should now see your changes 