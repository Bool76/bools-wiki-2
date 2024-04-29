# Git | Rebase

Summary - This section covers how to "rebase" with Git in relation to a Feature branch and a Main branch

<br>

### What is rebasing?
Rebasing is all about commits and what happens when you merge. You have commits from a Feature Branch and from the Main branch. When you merge Main into Feature, there might be commits from Main that now lay on top of your Feature branch commits. However if you want the Feature branch commits to be listed first, then you need to rebase. Rebasing places those Feature branch commits on top of the Main branch. 


### Steps

*Prerequisites - It could be pertinent to know how many commits are in the Feature branch. To get that make sure to push your branch to Github and then from there look at the number of commits listed*

1. From your Feature branch, switch to the branch you're using as the single source of truth (right now we are using the Main branch for that)
```
git checkout main
```
2. Get the latest version of Main:
```
git checkout main
```
3. Switch back to your Feature branch 
```
git checkout <<name_of_feature_branch>>
```
5. Merge the latest from Main into your Feature branch
```
git merge main
```
> :warning: **Warning:** While merging you might have merge conflicts. Please fix those. If you need assistance go to the "Merge Conflicts" section

6. Rebase w/ Main for your Feature branch
```
git rebase main
```
> :warning: **Warning:** While rebasing you might have the situation where you can't simply just "rebase" but you'r stuck with "REBASE 1/3". You'll have to go through a number of rebase checks. Please go to the section "Rebase in VS Code" (I don't think I've created this yet!) or "Merge Conflicts". I don't know which one!
7. Test if it worked correctly by looking at the Git Log
```
git log
```
8. The log should show the Feature Branch commits on top. Could be a good idea to count how many you see and compare that to how many commits are part of your Feature branch. 
9. Push your changes to Github:
```
git push -f origin <<name_of_feature_branch>>
```
> :memo: **Note:** You have to use `-f` to "force" the push because you've changed the order of commit messages 



