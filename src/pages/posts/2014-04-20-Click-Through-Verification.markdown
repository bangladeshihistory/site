---
layout: post
intro: false
featured: false
title: "Click-Through Verification"
uniqueID: "clickThroughVerification"
description: "Most clicks in the web, kick off an analytics script or a metrics trigger. This is how we can test them."
banner: ""
date: 2015-09-20 06:30:22
tags: [ "chrome", "testing", "web-inspector" ]
---

The measurement of a user clicking on a link that re-directs the user’s web-enabled device to another Web destination. [*](http://www.iab.net/wiki/print/)

## Click

A `click` can denote several different things. It can be a metric that measures the reaction of a user to an Internet ad. In this context, there are 3 types of click: `click-throughs`, `in-unit clicks` & `mouseovers`. It can be the opportunity for a user to download another file by clicking on an advertisement, as recorded by the server. It can be the result of a measurable interaction with an advertisement or key word that links to the advertiser's intended Web site or another page or frame within the Web site. *It can be a metric that measures the reaction of a user to linked editorial content. More information is available at the IAB Ad Campaign Measurement Guidelines. See also, clickthrough, in-unit click and mouseover.* [*](http://www.iab.net/wiki/print/)

### Operating System Requirements

* `Mac OS X 10.4.x` and up
* `Windows 2000` and up
* `iOS 6.x` and up
* `Android 4.1.x`  and up

<br/>

### Browser Requirements

* `Internet Explorer 8` and up
* `Firefox 34.0.x` and up
* `Chrome 39.0.x` and up
* `Safari 6.x` and up

<br/>

### Software Requirements

* [`Charles` Debugging Software](http://www.charlesproxy.com/)

<br/>

#### Example

For this example we will use a relatively simple marquee ad.

#### Scenario(s)

Go through the scenario below one step at a time to understand the steps for this one `click-through` test. For this specific ad there are multiple touch points that will redirect the user to the click-through URL.

```gherkin
Feature:
	As a tester  
	I want to click the ad  
	So that I can verify the click-through URL  

		Scenario Outline: I want to verify the click-through URL  
		Given I am on the AUT
		Then I should see "ad_wallpaper.jpg"
		And I should see "ad_image.jpg"
		And I should see "Adcade"
		And I should be on "ad_url.com"
		When I follow or press the ad exit button
		Then I should be redirected to "ad_url.redirect.com"
```

<br/>

#### Verifying Metrics for our Example

| Step | Description |
| --- | --- | --- |
| 1 | Open the AUT URL in your browser of choice. For this example, lets use Chrome on Mac OS X. |
| 2 | Open Charles. Your default view should appear similar to the screen shot. |
| 3 | From the toolbar, select Settings. |
| 4 | In the "Include" section, limit the recorder to sniff only requests made from Adcade servers. This is called whitelisting. |
| 5 | Your recording settings should reflect as follows. Be sure to include the server of the click-through. |
| 6 | Refresh the AUT. Until now your requests log should've been either empty or full of other requests from your computer. If you'd like you can select and delete all requests not relevant to this test. After refreshing the view, you should see requests being populated from our servers. |
| 6 | On the left-hand-side of the work station, you can select a request to view more details, which will open up on the right-hand-side of your work station. Select the call to the click through server, and double click "Host".  |
| 7 | Use this data to validate that the click-through is pointing to the right endpoint. |
