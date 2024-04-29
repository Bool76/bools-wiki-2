# Git | Track Branch

Summary - How you track a branch on your local that you don't see but it's part of the main repo

### Steps
*Prerequisite - You will need to know the name of the feature branch you want on your local*
1. On your local switch to the main branch 
2. For good measure you might want to pull the latest code
```
git pull
```
3. With knowing what branch you want to track run:
```
git checkout --track origin/<<name-of-branch>>>
``` 
