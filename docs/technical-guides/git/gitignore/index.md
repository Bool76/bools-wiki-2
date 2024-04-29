# Git | Gitignore

Summary - What is gitignore and how to use it

### What does gitignore file do?

Tells "Git" what files NOT to include within it's tracking index

### How to use it

1. Create a ".gitignore" file in the project root directory
2. Add file to git

```
git add .
```

3. Make a commit adding the file

```
git commit -am 'Adding gitignore file'
```

4. Add individual files by using:

```
test.txt
```

> :memo: **Note:** In this example you're igoring a single test.txt file

5. Add directories by using:

```
test/
```

> :memo: **Note:** In this example you're igoring everything in the test directory

> :warning: **Warning:** If you have already started tracking a file or folder in git and you add it to .gitignore, it won't work. You have already started tracking it. You will need to tell Git not to track this file by removing it from the index. To get around please see the next section.

### Remove indexed files / directories

1. For in individual file:

```
git rm --cached .env
```

> :memo: **Note:** The git rm command, along with the --cached option, deletes the file from the repository but does not delete the actual file. This means the file remains on your local system and in your working directory as an ignored file.

2. For a directory:

```
git rm -r --cached node_modules/@vuepress/core/node_modules/.cache
```

> :memo: **Note:** You need "-r" or recursive to remove all files within that directory

3. RUN

```
git status
```

> :memo: **Note:** You should see a bunch of files that are marked as "Deleted". This should mean that they are being deleted from being tracked, but the actual files shouldn't be deleted

4. Add gitignore file to Git index

```
git add .gitignore
```

5. Make a commit

```
git commit -am 'Place commit message'
```
