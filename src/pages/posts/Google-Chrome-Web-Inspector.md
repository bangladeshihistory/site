---
featured: false
intro: true
title:  "Inspecting Websites with Developer Tools"
uniqueID: "inspectingWebsites"
description: "Mastering inspect element functionality is key to debug websites, applications and requests. Become a debug aficionado in no time."
shortName: "🔍"
banner: "/images/posts/debug.jpg"
date: 2015-02-11
tags: ["chrome", "inspect-element", "qa", "testing"]
---

## Inspect Element in Chrome

The steps below should resemble inspecting elements on **any** browser. You can achieve this functionality on Chrome, Firefox, Safari and Internet Explorer.

1. [Download Google Chrome](https://www.google.com/chrome/browser/desktop/), then open it.
2. Go to your application. Once it's open head to you web application. Mine for instance is at [http://thoughts.metaterran.com](http://thoughts.metaterran.com).
3. Open the Web Inspector. `Right Click` on any part of the website and you should see a menu with an option `Inspect`:

	<img width="250" src="/images/posts/inspect_elements/rightClick.png">

4. After selecting `Inspect`, you should see a window pop-up in either one of three ways:

| Type | Screenshot |
| --- | --- |
| On the side |  <img width="250px" src="/images/posts/inspect_elements/onTheSide.png"> |
| On the bottom | <img width="250px" src="/images/posts/inspect_elements/onTheBottom.png"> |
| In a new window | <img width="250px" src="/images/posts/inspect_elements/newWindow.png"> |

6. Explore the mark up. For instance, I'm gonna choose to inspect the header video from Google:

  <div class="text-center"><img width="250px" src="/images/posts/inspect_elements/google.png"></div>

  I can inspect this by right-clicking on the item, or element, and selecting `Inspect`. And I would see:

  <div class="text-center"><img width="250px" src="/images/posts/inspect_elements/inspected.png"></div>

The below is telling me that the header video is contained in a `div`. This information and feature is important because it allows me as a developer to debug my application. As a test engineer, this functionality allows me to map out dependancies for my application.

```html
<div style="position: absolute; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 100%; height: 100%; cursor: pointer; background: url(&quot;/logos/doodles/2018/celebrating-mister-rogers-5592633123536896-vacta.gif&quot;) center center / 100% no-repeat; transition: opacity 2s ease 0s;"></div>
```
