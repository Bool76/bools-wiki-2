# Git | Add Git

Summary - You want Git setup locally in a project that is completely new with NO repo in Github. Also you have already created files locally that you want to now be in a brand new repo. How do you do it?

<br>

*Prerequisites* - 
1. Github repo account
1. Local project that you already have files for
1. Git is install globally on your local machine
1. Git SSH connection has been established w/ Github

<br>

### What you'll be doing
1. Creating a new repo in Github
2. Using the files from your local project and placing them in the new Github repo 

<br>

### Steps
1. Go to your Github account
1. Create a new repo on Github for your project (it might be helpful to give it a different name than what's in your local environment)
1. Copy the path to clone your repo
```
git@github.com:Bool76/vue-tailwindcss.git
```
4. Go to your local environment
1. Open a terminal
1. Navigate to where you want to place the new Github repo
1. Clone the repo locally:
```
git clone git@github.com:Bool76/vue-tailwindcss.git
```
8. Manually copy the original files from your local project and place them in the new repo you just cloned
1. Open the new repo in VS Code and open the terminal
1. First verify that Git is running on this project
```
git status
```
11. You should see all of the new files that you just copied over  
![Image from images folder](~@source/images/git/add-git/git_add-git_untracked-files.png)

1. Do as you normally would and add the untracked files and create a commit
1. Now push this change to Github
```
git push -u origin <<feature-branch-name>>
```
> :warning: **Warning:** You might come across a message such as:  
![Image from images folder](~@source/images/git/add-git/git_add-git_upstream-is-gone.png)

14. Do what they recommend and run:
```
git branch --unset-upstream
```
15. This should work and now you should be able to push this to Github
16. If you wish delete your old local project since you have this new one

