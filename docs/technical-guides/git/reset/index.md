# Git | Reset

Summary - When you're in the situation where you want to rollback to a specific commit

### Two Options

1. When you want to reset / rollback to a specific commit
2. When you want to reset / rollback to the last commit


### Rollback to Specific Commit
1. First you'll need to know what commit / head you're going back to.
2. RUN:
```
git reflog
``` 
3. This will display all of the commit messages, heads, and unique IDs associated to it. 
4. Find the one you want to go back to (I think the most recent start w/ [0]) and make note of the unique-id
5. RUN:
```
git reset --hard <<unique-id>>
``` 
6. That will do it. Though you might have to make another commit? But I don't think so. You're now back in time at a different head of the branch.

### Rollback to Last Commit

1. RUN: 
```
git reset --hard HEAD^
```
--hard ===  It will ignore all alerts and just rollback

> :warning: **Warning:**  I have not tested HEAD^. So you might want to be careful


### When to use
1. In production when you just want to go to back the previous code that you know worked
2. When your local is all f'ed up and you want to go back to a specific branch version (point in time)