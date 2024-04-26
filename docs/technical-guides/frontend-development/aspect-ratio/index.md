# Aspect Ratio

Definition - The original orientation of a video's size. When this is used the video will look as it's expected to.



### General Information

Aspect ratio and resolution go hand-in-hand

- Screen resolution == width x height
- Aspect Ratio == width / height

The sizing / numbers don't represent specific pixels. It's the relationship between width and height

*Example*  
16:9  
	- This doesn't mean that it's 16px x 9px.  
	- A pixel example of 16:9 is 1920px x 1080px 

<br><br>

### Common Video Aspect Ratios 

#### 16:9 
Summary - Most typical aspect ratio for videos. International standard for TV, live streaming, movies, video uploads, video sites (YouTube), etc.  

*Example*  

![Image from images folder](~@source/images/frontend-development/aspect-ratio/aspect-ratio_16-9_example.png)


#### 4:3 
Summary - The original standard for traditional television and computer monitor monitors. The reason for the switch was the birth of HDTV. The 16:9 aspect ratios allow for greater resolutions more pixels than 4:3 do.  

NOTE: Zack Snyder's Justice League was in 4:3

*Example*  
![Image from images folder](~@source/images/frontend-development/aspect-ratio/aspect-ratio_4-3_example.png)

<br>

#### 3:2
Summary -  This was originally used for classic 35 mm still photography
*Example*  
![Image from images folder](~@source/images/frontend-development/aspect-ratio/aspect-ratio_3-2_example.png)


#### 1:1
Summary - Ratio that's a perfect square

*Example*  
![Image from images folder](~@source/images/frontend-development/aspect-ratio/aspect-ratio_1-1_example.png)




#### 21:9
Summary - This ratio display has a very high definition and particular purpose. It is often referred to as ultra-widescreen or cinematic widescreen.

*Example*  

![Image from images folder](~@source/images/frontend-development/aspect-ratio/aspect-ratio_21-9_example.png)

<br><br>

### General Questions / Comments

N - If you use the original mp4's aspect ratio then the videos resolution will good (as expected)

Q - How does the video tag (html), by default, handle the aspect ratio of a video file? 

Q - Should I look at WD 1217 for how I worked with dropping in the `<video>` and what happened to the video files aspect ratio? Did we honor it or did we force one on it to meet the requirements of Feature Promo Single?