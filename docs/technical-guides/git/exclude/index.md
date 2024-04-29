# Git | Exclude

Summary - This is the alternative to .gitignore that can be used on your local system, with the same goal of nothing having Git track file changes, the difference is the "exclude" file won't be part of your projects repo.


### What's the difference between "exclude" and ".gitignore"?
.gitignore is part of the project repo where the Exclude file is not

<br>

### What do you need? 
You'll need to create a .exclude file in your project in the `.git/info` directory

<br>

### Steps to Create
1. Go to your project root directory
2. Go to the info directory in .git
```
cd .git/info
```
3. In that directory check to see if there's a `exclude` file
4. If there is no file then create one:
```
touch exclude
```
5. Use VIM (VI) to edit the file
```
vi exclude
```
6. Add the following header into the file which gives basic instructions on how to use it
```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```
> :memo: **Note:** The hashtag is used to comment out lines - Therefore you can see the entire header is commented out code

<br>

### How to use it
1. From your project root directory you can VI into the Exclude file
```
vi .git/info/exclude
```
2. Enter into "insert mode" so you can edit the file
```
i
```
3. Place files (or I think you can also place a directory) you want to exclude in a list below the header
 ![Image from images folder](~@source/images/git/exclude/git-exclude-example.png)
4. When you're complete making your changes escape out of the file `esc`
5. Write and quit the file
```
:wq
```
6. That should be it. If you rerun a `git status` you should no longer see the file you excluded
