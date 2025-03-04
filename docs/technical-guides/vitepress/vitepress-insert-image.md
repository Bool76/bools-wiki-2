# Vitepress | Insert Image

<br>

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
