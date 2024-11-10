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
