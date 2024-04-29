# VS Code | Debugging

Summary - Overview of how to debug on a certain line and see object attribute values

### Steps

#### Add a breakpoint to a specific line

1. On the file you want to add the break, go to the left margin, left of the numbered line of code
1. Click - You'll then see a red dot (signifying the new breaking point)
   ![Image from images folder](~@source/images/vscode/vscode-debug_01.png)

#### Start Debugging mode

1. Go to: Run > Start Debugging
   ![Image from images folder](~@source/images/vscode/vscode-debug_02.png)
1. VS Code will enter into Debugging mode and there are a few things to note:
   1. You will know its in debugging because of the Debug Controller in the upper right hand corner:
      ![Image from images folder](~@source/images/vscode/vscode-debug_03.png)
   1. Notice the "pause" status of this controller - Signifies that it's currently running through code
   1. Where you have your terminal window - You'll see another option that's the "Debug Console"
      ![Image from images folder](~@source/images/vscode/vscode-debug_04.png)
      > :warning: **Warning 1:** I have noticed that this state takes a while to get to your first break point!  
      > :warning: **Warning 2:** When working with SRAM's slr2 env I had to go to the webpage with the Next Gen Doc to move it along to get to the breakpoint
1. When it gets to the first break point - The Debug Controller will look like this (note the Play / Pause button)  
   ![Image from images folder](~@source/images/vscode/vscode-debug_05.png)
1. Debugger will also bring up the file it's breaking on and highlight breaked line:
   ![Image from images folder](~@source/images/vscode/vscode-debug_06.png)
1. How to use the debug controller (when it's stopped on a breakpoint):  
   ![Image from images folder](~@source/images/vscode/vscode-debug_07.png)  
    1 === Continue running through the code  
   2 === Go to the next line of code and run it  
   3 === Step into the code (haven't use it before)  
   4 === Go back to previous line (haven't use it before)  
   5 === Restart the entire debug process  
   6 === Stop debugging

#### See debugging results (3 options)

1. OPTION 1  
    **Summary**: Look at variables section of debug. When you want to look for values of an object and or it's attributes

   1. Place in a breakpoint
   1. Run > Start Debugging
   1. Wait for code to pause on your breakpoint
   1. Make sure you're on the Debug section on the left:  
      ![Image from images folder](~@source/images/vscode/vscode-debug_08.png)
   1. Expand the Variables area  
      ![Image from images folder](~@source/images/vscode/vscode-debug_09.png)
   1. Look for the View Data section and expand it
   1. Look for the object you want to look at - In this example look and expand "Model"
      ![Image from images folder](~@source/images/vscode/vscode-debug_10.png)
   1. Notice in this example:  
      1 === This is the value of "MetaDescription"  
      2 === This is the value of "Title"

1. OPTION 2  
   **Summary**: Add item to "watch" list. When there's a specific object, variable, etc that you want to see it's value

   1. Place in a breakpoint
   1. Highlight the object of interest and right click (it might have to be in Debuging mode to add)  
      ![Image from images folder](~@source/images/vscode/vscode-debug_11.png)
   1. Right click and select 'Add to watch'
   1. On the right side - Expand the "Watch" area
   1. Notice that the object has been added to this area but it's not available  
      ![Image from images folder](~@source/images/vscode/vscode-debug_12.png)
   1. Run > Start Debugging
   1. Wait for code to pause on your breakpoint
   1. On the right side - Look at the watchable item
   1. You should see a value:  
      ![Image from images folder](~@source/images/vscode/vscode-debug_13.png)

1. OPTION 3  
   **Summary**: Manually add item to "watch" list. When there's a specific object, variable, etc that you want to see it's value.
   1. Stop debuggin mode or not in debugging
   1. Place in a breakpoint on the line where your item of interest is
   1. On the right side - Expand the "Watch" area
   1. Click Plus icon:  
      ![Image from images folder](~@source/images/vscode/vscode-debug_14.png)
   1. That will show a text box that reads "Expression to watch"
      ![Image from images folder](~@source/images/vscode/vscode-debug_15.png)
   1. Simply add what you want to watch:
   ```
   asdf
   ```
   7. Now you can run debugging:  
      Run > Start Debugging
   1. Keep an eye out for the Watch section now for your new expression value
