# VS Code | Merge Conflicts

Summary - How to solve conflicts when merging using VS Code

<br>

### Steps
*Scenario - While merging you experience merge conflicts in VS Code that need to be fixed*
1. On the lefthand side that are listed "Merge Changes" and "Staged Changes"  
![Image from images folder](~@source/images/vscode/merge-conflicts/merge-conflicts_staging.png)
2. Notice that from the commandline you're now in the status of MERGING  
![Image from images folder](~@source/images/vscode/merge-conflicts/merge-conflicts_commandline_merging.png)
3. You now need to start the process of fixing the merge conflict. The merge conflict is in one file "main.css". You know this because it's in the file that's listed in the Merge Changes section
4. Click on the file (in the Merge Changes section)
5. Here you'll see the following: a bunch of code highlighted, a "HEAD" section which indicates where the changes start
    1. A bunch of code highlighted which indicates new / changed code
    2. A "HEAD" section which indicates where the changes start
    3. VS Code options on how to handle the changes (seen in small font at top, to the left):  
        1. Accept Current Change === Accepting your local code 
        2. Accept Incoming Changes === Accepting code you're merging in    
        3. *And other options*
6. For this example I'm just going to accept incoming change because I know what to do next (cause this is for the main.css file)
7. Now you need to save changes to the file
8. Now you're going to click the "+" (plus icon) next to the file - For purpose of placing the file in "Staged Changes" section:  
![Image from images folder](~@source/images/vscode/merge-conflicts/merge-conflicts_merge-changes_plus-icon.png)
9. Click "Commit" button - Yes this feels wrong like you're creating a brand new commit on your Feature Branch but you're fine
10. Back to the command line you might want to hit "Return" to get a new line. Now you should see you're no longer in "Merging"  
![Image from images folder](~@source/images/vscode/merge-conflicts/merge-conflicts_final.png)
11. In the SRAM Connect repo example we're working from, you might want to compile the main.css again to include any local changes you made.  
Why? Because we accepted incoming changes which overroad any compiled code you created. This next command just compiles it again to gather any changes you made locally
```
npm run build
```
> :memo: **Note:** Make sure to run from: /sramconnect/PublicSites/SRAM.Public.Web