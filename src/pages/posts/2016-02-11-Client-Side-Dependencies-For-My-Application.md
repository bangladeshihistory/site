---
layout: post
featured: true
intro: false
title:  "Client Side Dependencies for http://sajjad.nyc"
description:  "Now that we know how to inspect elements, lets track down some dependencies for a standard web application."
banner: "http://localhost:4000/images/posts/banners/webdriverio.jpg"
date: 2015-02-11 14:31:11
tags: chrome inspectelement testing blackbox
---

## Get those urls

After inspecting specific elements or viewing the entire source, we can begin mapping dependencies that render client-side. For instance, in [http://sajjad.nyc](http://sajjad.nyc), there are a handful of dependancies, some that will become obsolete in later versions, but that remain being used in production for this version 2.0. 

The source looks something like:

	<!DOCTYPE html>
		<html lang="en">
			<head>
			...
			</head>
			<body>
			...
				<footer>
				...
				</footer>
			</body>
		</html>

From the `head`, they are:

	[http://sajjad.nyc/stylesheets/vendor/materialize.min.css]()
	[http://sajjad.nyc/stylesheets/vendor/pace.css]()
	[http://sajjad.nyc/stylesheets/style.css]()
	[http://sajjad.nyc/javascripts/vendor/jquery-1.11.3.min.js]()
	[http://sajjad.nyc/javascripts/main.js]()
	[http://sajjad.nyc/javascripts/vendor/pace.js]()
	[http://sajjad.nyc/javascripts/vendor/modernizr-2.8.3.min.js]()
	[http://fonts.googleapis.com/icon?family=Material+Icons]()
	[http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700,800]()
	[http://fonts.googleapis.com/css?family=Exo+2:300italic,100italic,200italic,200,900italic,300,400,100,400italic,900]()

From the `footer`, they include:

	[http://sajjad.nyc/javascripts/vendor/classie.js]()
	[http://sajjad.nyc/javascripts/vendor/menu.js]()
	[http://sajjad.nyc/javascripts/vendor/materialize.min.js]()
	[http://sajjad.nyc/javascripts/vendor/init.js]()

The lists above gives us about 80% coverage for the applications main dependancies. Now that we mapped the requests for the home page request.

## Testing your application

Next, see [Automating Tests for http://sajjad.nyc](/2015/10/25/Automating-Tests-For-My-Site.html). 