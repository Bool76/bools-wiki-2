# Git | Rebase Explained

**Summary** - This section covers an in depth explanation of what rebasing does in relation to merging. It will answer the questions:   

What does the merge process do? 

What does rebasing do?

<br>
 
### When to use Rebase
When your local Feature branch's commits are behind the Master branch and you want your Feature branch commits to be on top of or at the head of the Master branch commits 

<br>

### Rebase Breakdown
1. Lets say you have a Feature branch off of a Master branch with two commits:  
![Image from images folder](~@source/images/git/rebase-explained/rebase-explained-01.png)
2. When you then do a Merge on to the Master branch, one "merge" commit is being created from your two Feature branch commits:  
![Image from images folder](~@source/images/git/rebase-explained/rebase-explained-02.png)
3. The problem with this can be you have all of these other Feature branches that are also doing Merges:  
![Image from images folder](~@source/images/git/rebase-explained/rebase-explained-03.png)
4. However if you use Rebase instead, you're placing your Feature branch commits a head or on top of the Master branch:  
![Image from images folder](~@source/images/git/rebase-explained/rebase-explained-04.png)
5. Once rebased on the Master branch is finishing it will look something like this:  
![Image from images folder](~@source/images/git/rebase-explained/rebase-explained-05.png)
6. In comparison this is what Merge and Rebase look like side by side. Rebase can be linear where Merge can be a bunch of lines:  
![Image from images folder](~@source/images/git/rebase-explained/rebase-explained-06.png)
7. Keep in mind that you are rewriting commits. This works well for when you use this locally when you have a branch with a ton of commits that you want to condense into one commit. Then as you know, you just push that one Feature branch to Master. Again that's how you're using it. 

> :warning: **Warning:** When finished locally with these changes and you want to push to Github you need to push with a `-f` option which forces the push beause you're changing the order of the commits

```
git push -f origin <<name-of-feature-branch>>
```