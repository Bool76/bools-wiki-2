# Clone Specific Branch

Summary - While working with Scotts stuff, you needed to clone a repo, but a specific branch! Not just running the standard cloning script. You needed the report from "master" and not "staging". Staging was by default the branch that would be cloned

### Steps

1.RUN:

```
git clone -b <branchName> git@github.com:scotts-ebiz/cruithne.git
```

e.g.

```
git clone -b master git@github.com:scotts-ebiz/cruithne.git
```
