# Markdown | Insert Image

Summary - There appear to be two possible ways to insert images in Markdown. I must note that 

1. Vuepress Approach - The original platform that I used for my wikis 

1. Vitepress Approach - I switched to Vitepress as a newer version of a wiki which is what this current wiki is using

<br><br>

## Vuepress Approach 

<br>

*Example*
```markdown
![Image from images folder](~@source/images/chrome-dev-tools/chrome_dev-tools.png)
```

<br>

### Steps

1. Select the image you want to use
2. Go to the "images" directory in the project

```
docs/images/
```

3. You might want to create a sub-directory in "images" that is assocaited to the subject matter (e.g. Same name as the article section)
4. Paste the image in the sub-directory (NOTE - It might be easier to do this through Windows Explorer or Finder)
5. In your article select where you want the image to go and use the following code:

```markdown
![Image from images folder](~@source/images/name-of-sub-directory/name-of-image.png)
```

<br><br>

### Add Title Tag

Overview - You can add a title tag to `<img>` if you wish by adding a quoted text after the URL

```markdown
![Image from images folder](~@source/images/name-of-sub-directory/name-of-image.png "Title of Image")
```




<br><br>


## Vitepress Approach

Overview - Approach that works with Vitepress

<br>

*Example*
```markdown
![Image from images folder](/visual-studio/visual-studio-screenshot/search-for-greenshot.png)
```

<br>

### Steps

1. Select the image you want to use
2. Go to the "public" directory in the project

```
docs/public/
```

3. You might want to create a sub-directory in "public" that is associated to the subject matter (e.g. Same name as the article section)
4. Paste the image in the sub-directory (NOTE - It might be easier to do this through Windows Explorer or Finder)
5. In your article select where you want the image to go and use the following code:

```markdown
![Image from images folder](/visual-studio/visual-studio-screenshot/search-for-greenshot.png)
```
