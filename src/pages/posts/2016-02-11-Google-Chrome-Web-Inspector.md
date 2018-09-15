---
layout: post
featured: true
intro: false
title:  "Inspecting Websites in Google Chrome"
description: "This a great tool to master, debug websites, applications and requests. Become a debug aficionado in no time."
banner: "http://localhost:4000/images/posts/banners/webdriverio.jpg"
date: 2015-02-11 14:31:11
tags: chrome inspectelement qa testing
---

## Inspect your application

1. [Install Google Chrome](https://www.google.com/chrome/browser/desktop/), then open it.
2. Go to your application. Once it's open head to you web application. Mine for instance is at [http://sajjad.nyc](http://sajjad.nyc).
3. Open the Web Inspector. `Right Click` on any part of the website and you should see a menu with an option `Inspect`.

	<img class="materialboxed responsive-img padding-top" data-caption="Right Click and  select Inspect" width="250" src="{{ site.baseurl }}/images/posts/content/chrome-right-click-menu.png">

4. Click `Inspect`
5. After selecting `Inspect`, you should see a window pop-up in either one of three ways.

	| Type | Screenshot |
	| --- | --- |
	| On the side |  <img class="materialboxed responsive-img padding-top" data-caption="Right Click and  select Inspect" width="75%" src="{{ site.baseurl }}/images/posts/content/chrome-inspector-side.png"> |
	| On the bottom | <img class="materialboxed responsive-img padding-top" data-caption="Right Click and  select Inspect" width="75%" src="{{ site.baseurl }}/images/posts/content/chrome-inspector-bottom.png"> |
	| In a new window | <img class="materialboxed responsive-img padding-top" data-caption="Right Click and  select Inspect" width="75%" src="{{ site.baseurl }}/images/posts/content/chrome-inspector-new-window.png"> |
6. Explore the mark up. For instance, I'm gonna choose to inspect my name:	<img class="materialboxed responsive-img padding-top" data-caption="Right Click and  select Inspect" width="75%" src="{{ site.baseurl }}/images/posts/content/site-header.png">
	
	I can inspect this by right-clicking on the item, or element, and selecting `Inspect`. And I would see:
	<img class="materialboxed responsive-img padding-top" data-caption="Right Click and  select Inspect" width="75%" src="{{ site.baseurl }}/images/posts/content/site-header-inspected.png">  
	
	
The below is telling me that my name `Sajjad Hossain` is contained in a `div` with multiple `span`'s. This information and feature is important because it allows me as a developer to debug my application. As a test engineer, this functionality allows me to map out dependancies for my application.
	
	<h1><span class="first-name">Sajjad</span><br class="hide-on-med-and-up"><span class="last-name">Hossain</span></h1>


## My application requirements
	
Next, see [How I tracked down all the client-side dependancies to my project](/2015/02/11/Client-Side-Dependencies-For-My-Application.html).