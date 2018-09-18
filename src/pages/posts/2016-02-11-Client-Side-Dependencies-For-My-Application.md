---
layout: post
featured: false
intro: false
title:  "Mapping Client Side Dependencies"
uniqueID: "mappingClientSideDependencies"
description:  "Now that we know how to inspect elements, lets track down some dependencies for a standard web application."
banner: ""
date: 2015-02-11 14:31:11
tags: ["chrome", "inspect-element", "testing", "blackbox"]
---

## Get those urls

After inspecting specific elements or viewing the entire source, we can begin mapping dependencies that render client-side. For instance, in [http://sajjad.nyc](http://sajjad.nyc), there are a handful of dependancies, some that will become obsolete in later versions, but that remain being used in production for this version 2.0.

The source looks something like:

```html
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
```

From the `head` and from the `footer`, they include should look like:

* http://sajjad.nyc/javascripts/vendor/classie.js

Obtaining above gives us about 80% coverage for the applications main dependancies. Now that we mapped the requests for the home page request.
