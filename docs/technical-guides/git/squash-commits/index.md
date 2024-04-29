# Git | Squash Commits

Summary - A "squash commit" is how you merge commit messages for a feature branch into one message. Although the code doesn't read "squash" it's a common term that's used. The code, as you'll see, is just another way to use `rebase`.


> :memo: **Note:** If desired you should be able to merge certain selected commit messages together and not HAVE to always merge all of them into one. I'm going to test this. Wish me luck bitch! 


<br>

## Steps
*Prerequisite: You must know how many commits that you are going to merge / squash. One trick to this would be to push to Github, look at the Feature Branch, and see how many commits there are.*

1. From knowing how many commits you have enter the following command with the end number being the number of commits on this ticket:
```
git rebase -i HEAD~2
``` 
- "-i" == Means go into interactive mode  
- "2" == Total number of commits in your Feature branch you want to include in this squash process  
2. You'll see something like the following:  
![Image from images folder](~@source/images/git/squash-commit/git_squash_select-commits.png)  
3. First you'll see all commits at the top of the screen from oldest on the very top down to the newest:
![Image from images folder](~@source/images/git/squash-commit/git_squash_commit-list.png)  
4. You now need to indicate what you want to happen to each individual commit message. There are many options listed but you're just concerned with "squash" and "reword". To indicate what to do with each commit you're going to place an "s" or a "p" next to those commits. To do that you need to edit the file.
5. Use VIM (VI) to edit the file and you know how to do this. Like normal VIM, enter into INSERT mode by typing `i`. 
6. Set the single letter command next to each commit based on what you want to do with that commit. In this situation you want to "reword" the oldest (commit at the very top) and "squash" all of the reset of the commits into one. Place an "r" next to the top commit and an "s" next to the next commit down:  
![Image from images folder](~@source/images/git/squash-commit/git_squash_letter-commands.png)  
> :warning: **Warning:** The "r" command can only be placed on the first line and no other!  

> :memo: **Note:** Just FYI. You had one of these where you had 80 commits! That means you woud have to go in an manually change all of those "pick" to an "s". F that!!! You got smart and used a "find / replace" for VIM. Look at the "Find + Replace" article.
7. Like normal VIM, hit the following to escape out of INSERT mode and write and quit
    1. esc button
    2. `:wq`
8. That will get you into another step that's called COMMIT_EDITMSG. Here you're doing two things:
    1. Rewording the single selected commit message 
    2. Commenting out the other messages  

    Here' what the screen looks like:
![Image from images folder](~@source/images/git/squash-commit/git_squash_edit-messages.png) 
9. Use VIM once again to edit this item. Here you want to:
    1. Edit the commit message to what you want
    2. Place a `#` next to all other commit message lines (commenting them out)
    3. Esc and `:wq` 
10. You'll get booted out of that file and back to your command line where you should see some sort of success message:  
![Image from images folder](~@source/images/git/squash-commit/git_squash_success.png) 
11. To verify this has done what you indented - Check the git log to see the list of commit messages:  
```
git log
```
12. You should see your single commit message rather than the list you had before  
> :memo: **Note:** You will of course still see other historical commit messages

<br>

## Other Notes

### Kept a commit, reworded a commit, and squashed others

#### Scenario 
- 4 commit messages
- Wanted to keep the oldest commit
- Wanted to squash the 3 newest commits
- Resulting in two commits

#### Steps
1. As you normally would, count how many commits are involved and apply that to your `rebase` command
2. Next step is where you indicate what commands you're going to 'squash', 'reword', etc
3. You have two options to do this:
   1. OPTION 1 - Enter insert mode
      1. Once in insert mode place one of the following letters:
         1. Place `p` next to oldest commit - Selecting to keep it
         2. Place `r` next to the next oldest commit - Selecting to reword it
         3. Place `s` next to the next commits which are the newest - Selecting to have them squashed
   2. OPTION 2 - Stay out of insert mode
      1. Click - Control + x
      2. This will scroll through each rebase option
      3. Move cursor up and down to each commit you need to change  
4. Next step was a little confusing as it just showed your one commit that you're going to reword. Just showed and no action.
5. Edit the message to what you want it to be and comment out or place a `#` next to the two newer commits
6. Finish up like you normally would
7. Run `git log` to see what your results are
8.  What will you see?
    - At the top the reworded commit
    - Below that the oldest commit  
9.  What happened?
    - You kept the oldest commit
    - Squash other commits to one and reworded it
    - Resulted with 2 commits which is what you wanted


## Rebase Command Shortcut
Overview - Instead of entering into insert mode to identify actions for commit messages (e.g. Squash, Reword, Keep)

#### Steps
1. Keep out of insert mode
2. Click `Control + x`
3. This will scroll through the commit message actions
