# HTML | Video Tag

**Overview** - How to work with the Video element and some basic rules to understand

**Example**

```
<video autoplay="" loop="" muted="" poster="">
    <source src="/contentassets/e0d83a01114b46ee8111e3af132965b1/banner.mp4" type="video/mp4">
</video>
```

### What's Needed

1. `video` tag
1. `source` tag

<br><br>

### Video Tag
Overview - A open and close video tag which indicates where the video is going to be placed. Video attributes are used to control the video container and some video controls such as autoplay and poster

#### Video Element Attributes

**height** === The height of the video's display area, in CSS pixels (absolute values only; no percentages).

**autoplay** == tbd  

**poster** === Sets a static image to be loaded while the video is waiting to be loaded

<br><br>

### Source Element
Summary - Self closing tag that's needed to point to the video that you want loaded into your player

#### Source Element Attributes

**src** === Will point to the location of the video file

**type** === Indicate what type of video file it is

<br><br>

### Video Element Basics
1. Has a `display` value of `inline`
1. Will honor the aspect ratio of the source video
1. Width and height in the viewport is defined by the video being embedded.
1. If you set the `width` of the `video` element to 100% then the video will expand to the entire width but the height will also auto adjust to that the aspect ratio is honored

<br><br>

### Real World Challenge to Solve
**Problem** - I want a video to span the entire container's width but have a set height and keep the video's original aspect ratio.  However this is impossible with how the video in the `video` element works

**Solution** 
1. Create a parent `div` for the `video` element to go inside of
1. Set a specific height on the parent `div`
1. Set the `overflow` attribute in the parent `div` to `hidden` 


**What's the problem?**  
With this solution you won't see all of the video. The top and the bottom of the video can get cut off. You could try to set some sort of `display: fixed` on the video element and then adjust the positioning up or down. 

<br>

*Example*
```
#video-bg {
  width: 100%;
  right: 0;
}

.video-container {
  border: 1px solid red;
  height: 500px;
  overflow: hidden;
}

<div class="video-container">
  <video autoplay loop muted id="video-bg">
    <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" /> />
  </video>
</div>
```

#### What's happening?
1. You need the `<video>` element to display the video
1. The `<source>` tag inside of `<video>` does two things:
    1. Points to the source of the video
    1. Identifies the file type
1. By default the `<video>` element: 
    1. Has a `display` value of `inline`
    1. Will honor the aspect ratio of the source video
    1. Width and height in the viewport is defined by the video being embedded.
1. `video-container` is the parent div that we needed for the `video` element to be placed inside
1. `video-container` is given a set height of 500px
1. `video-container` has the attribute `overflow: hidden` which will remove any content that extends outside of the div 


<br>

#### Scenario 1: Default look of sample video (alone):  
   ![Image from images folder](~@source/images/frontend-development/html/video-element/html_video-element_default-view.png)

   *Breakdown*
   - Video's default width and height are used since nothing is overriding it
   - Video's default aspect ratio is used since nothing is overriding it 


<br>

#### Scenario 2: Default look of sample video w/ a div next to it  
![Image from images folder](~@source/images/frontend-development/html/video-element/html_video-element_default-view-w-div.png)

*Breakdown*
- Video is an inline element by default
- Since Video is an inline element the content `div` is placed right next to it (NOTE: The `div`'s display type was changed to inline)

<br>

#### Scenario 3: Video width set to 100% (alone)  
![Image from images folder](~@source/images/frontend-development/html/video-element/html_video-element_width-100-percent.png)

*Breakdown*
- Video expands the entire width of the page
- Aspect ratio is kept (would have to scroll down to see the bottom of the video cause it's so big)

<br>

#### Scenario 4: Video width solution in place / parent div  
![Image from images folder](~@source/images/frontend-development/html/video-element/html_video-element_overflow-hidden.png)

*Breakdown*
- In a parent `div` has been added
- In the parent `div` the following items are set:
  - Height is set to a specific px height
  - `overflow: hidden` which hides any content that expands beyond the div
- Though it's hard to see in the image, the video is there with a limited height so you don't see much
- The arrows point to the top and bottom of the parent div
