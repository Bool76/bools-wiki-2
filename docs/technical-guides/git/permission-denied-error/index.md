# Git | Permission Denied Error

Overview - This is how to fix an error which you might get when running a `git clone` on a repo locally. It can look like:
```
GitHub’s Permission denied (publickey) 
```

### Why did I get this error
1. The PC I was working on didn't have an SSH Key created
2. The SSH Key wasn't listed in my repo as an accepted key

> :warning: **Warning:**  This is what I did to fix the issue though it might not be the same for you

### Steps
1. Create an SSH Key for you local machine
2. Go to [Create SSH Key](/git/ssh/create-ssh-key)  
> :warning: **Warning:**  If you created this in VS Code then you might have to restart it
3. Copy your new SSH Key
4. Add the SSH Key to Github
5. Go to [Add SSH Key](/github/add-ssh-key)
6. To test if this is fixed you can run:  
```
ssh -T git@github.com
```
7. You'll get a result like:
```
Hi captainAssHat! 
GitHub SSH authentication is successful...
```

