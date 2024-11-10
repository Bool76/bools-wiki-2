# Screenshot Not Working

<br>

Overview - While in Visual Studio, using a PC, taking a screenshot (PrtSc button) isn't working.  

Why?  
It appears to be a permissions issue where the program I'm using for screenshots (Greenshot) doesn't have high enough permissions to gain access to Visual Studio.  

What is the fix?  
You must change the permissions of Greenshot by running it as administrator 

<br> 

## Steps
1. If Greenshot is running - Exit the program. You might have to do this from the lower righthand corner of your screen 
1. Search for Greenshot from Windows 
![Image from images folder](/visual-studio/visual-studio-screenshot/search-for-greenshot.png)

1. Right click on Greenshot and select - Run as administrator
![Image from images folder](/visual-studio/visual-studio-screenshot/greenshot-run-as-admin.png)

1. Now you should be able to take a screenshot in Visual Studio using the PrtSc button which uses Greenshot