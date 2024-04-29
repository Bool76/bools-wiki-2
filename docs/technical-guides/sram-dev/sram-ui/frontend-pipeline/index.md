# Sram-ui | Frontend Pipeline

Summary - How to install the sram-ui package into another project. In this article we'll be doing it for slr2

<br>

### Local | Sram-ui Steps

1. Make sure you've finished all of your changes, tested, and you're ready to push to Github
1. Open `package.json` and find the `version` line of code
1. Change the version number increasing it by one (most times only increase the last number)
```
\\ Original
4.02.02

\\ New
4.02.03
```
4. Make final commit, push to Github, and merge into the sram-ui repo

<br>

### Local | slr2 Steps

1. Switch to `main` branch and pull recent code
2. Create new branch (base branch name off of Jira ticket number)
3. In a terminal navigate to the “slr2.web” directory (you need to be in this directory to run npm commands)
```
cd slr2.web
```
4. Make note of the new version number. Run the following script to update the package.json dependency for "sram-ui" to the current version (enter in the appropriate new version number):
```
npm install @sramplm/sram-ui@X.X.XX
```
e.g.
```
npm install @sramplm/sram-ui@0.7.11
```  
5. Go to `package.json` and verify the sram-ui version number has updated. Look for:
```
 "dependencies": {
    "@sramplm/sram-ui": "^0.7.11",
```
6. Verify the correct version number is seen
7. Run build:
```
npm run build
```
8. Start the slr2 environment locally (via VS Code):  
Run > Run Without Debugging
9. Go to site to test:
```
http://localhost:32673/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG
```
> :warning: **Warning:** The above link might not work. If so then go to the slr2 URL + PubId article

10. Save changes and make final commit
11. Push code to github to the Main branch in "slr2"
12. In Github create a PR for slr2 and you know the rest

