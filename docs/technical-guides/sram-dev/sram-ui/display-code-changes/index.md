# Sram-ui | Display Code Changes

Summary - Locally how do you see your code changes when you enact changes for the following files:
- Component Index File 
    - `style` tag  
    - `template` tag
- Storybook File (mdx) 

#### Where are CSS style sheets found?
They typically aren't individual files but are `<style>` tags within the index.vue files for each component

### Index File | CSS Style Tag or Template Tag
*Prerequisite - Storybook is running on your local `npm run storybook:serve`*
1. Make changes in your file which would be within the `style` or the `template` tag

2. Save changes to your file

3. Go to Storybook and locate the component you're changing
 
4. You should see your changes (no need to refresh)

NOTE: There might be the situation where you need to launch Storybook in it's own window. With that you might have to refresh the page.



### Storybook File (mdx)
*Prerequisite - Storybook is running on your local `npm run storybook:serve`*
1. Make changes in your Storybook mdx file

2. Save changes to your file

3. Go to Storybook and locate the component you're changing
 
4. You should see your changes (no need to refresh)

NOTE: There might be the situation where you need to launch Storybook in it's own window. With that you might have to refresh the page.

> :warning: **Warning:** There might be a situation where you have to stop the instance of Storybook and restart though right now I don't know of one