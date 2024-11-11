# Sramconnect | Debug

Summary - Pleas see below for how to run debugging in the Sramconnect project / repo. There appears to be 2 options to choose from. 

<br>

#### Options

1. Through VS Code - Please see the VS Code section and look for "debug" or "debugging". 
> :warning: **Warning:** I can't verify right now if this works
2. Through Visual Studio - Follow steps below


<br> 


## Through Visual Studio

> :memo: **Note:** In this example I'm running debug for an API call which means I start debugging by clicking the "Send request" option in an http file


> :warning: I'm starting my steps with already being able to attach the w3wp file. But you needed to somehow associate it before and be running Visual Studio as an Admin in order to do it.


Example Setup
In Sramconnect you are debugging some input from an API. We are going to fire off an API request from an HTTP file. This is going to also start our debugging process. 


<br>

1. Go into a file and set a break in your code. Do this by placing a "dot" in the lefthand margin of your code at the line you want it to stop. 
![Image from images folder](/sram-dev/sramconnect/debug/debugging-set-code-break.png)
1. Start debugging by "attaching" the w3wp file
1. Go to the Debug menu
1. Click on - Reattach to wpw3.exe
![Image from images folder](/sram-dev/sramconnect/debug/debugging-attach-exe.png)

1. Wait just a few seconds and then you'll see an alert window
![Image from images folder](/sram-dev/sramconnect/debug/debugging-attach-alert.png)

1. If you look in the lower righthand side of your screen you'll see an "Output" window that shows you that debugging has started 
![Image from images folder](/sram-dev/sramconnect/debug/debugging-feedback-window.png)

1. Navigate to your HTTP file where you're going to start the local API request
1. Click on the "Send request" link
![Image from images folder](/sram-dev/sramconnect/debug/debugging-start-http-request.png)

1. The request will run and stop at your first code break
![Image from images folder](/sram-dev/sramconnect/debug/debugging-stops-at-first-code-break.png)

1. Now you have the option to either "step into" that code or "step over" and thus step to the next step in the code
1. To "step into" that code click this icon:
![Image from images folder](/sram-dev/sramconnect/debug/debugging-step-into-step.png)

1. In the code you'll now be into the details of that step
![Image from images folder](/sram-dev/sramconnect/debug/debugging-step-into-result.png)

1. To "step over" and go to the next step in the code click this icon:
![Image from images folder](/sram-dev/sramconnect/debug/debugging-step-over.png)

1. To stop debugging click the red stop icon:
![Image from images folder](/sram-dev/sramconnect/debug/debugging-stop-debug.png)


<br><br>

### PROBLEM SOLVING: If Unable to Attach

<br><br>

#### "Reattach to wpw3.exe" is in Debug Menu

Scenario - All of a sudden when I select "Reattach to wpw3.exe" from the Debug menu, then a popup window displayed and said that I needed to attach the process. However I had already attached the process and hence I could see the "Reattach to wpw3.exe" in the Debug menu

##### Steps
1. Make sure that you're running as an admin
    1. Close out Visual Studio code
    1. Search for Visual Studio through the Windows option
    1. When you see the app listed, right click on it, select run as admin
1. Make sure that Azurite is running
    1. Open VS Code if you want to run it through there
    1. In the terminal of VS Code type `azurite`
    1. You should now see Azurite start to run
1. You might want to Rebuild your project in Visual Studio
    1. In Visual Studio go to - Build
    1. Select - Rebuild Solution
1. Make sure that in instance of a sramconnect site is open and running (e.g. sram.com on your local)
    1. Open a new tab in Chrome
    1. Go to - http://local.sram.com/
    1. Once that loads you should be fine, you don't even have to login 
1. If you're working with running a API request from an http file then you also might want to run a successful "Send request" without any breakpoints in the code
1. Now try to reattach! This should now work!