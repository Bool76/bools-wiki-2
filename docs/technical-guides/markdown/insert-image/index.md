# Markdown | Insert Image

Summary - How to insert an image into a markdown article

#### Code Sample

```markdown
![Image from images folder](~@source/images/chrome-dev-tools/chrome_dev-tools.png)
```

<br><br>

#### Steps

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

#### Add Title Tag

Overview - You can add a title tag to `<img>` if you wish by adding a quoted text after the URL

```markdown
![Image from images folder](~@source/images/name-of-sub-directory/name-of-image.png "Title of Image")
```
