---
layout: post
featured: false
intro: false
title:  "Blackbox Testing an Application"
uniqueID: "blackboxTestingAnApplication"
description:  "Given we know how to inspect elements, reverse engineering dependencies for the application under test is our next milestone."
shortName: "✅ "
banner: ""
date: 2015-03-24
tags: ["chrome", "inspect-element", "testing", "blackbox"]
---

## Obtaining URLs

After inspecting specific elements or viewing the entire source, we can begin mapping dependencies that render client-side. For instance, in [http://thoughts.metaterran.com](http://thoughts.metaterran.com), there are a handful of dependancies. These values will change overtime, so mapping them in a traceable fashion is recommended.

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

* http://thoughts.metaterran.com/js/clean-blog.js

Obtaining URLs like the one above, can give up to about 80% coverage for the applications' main dependancies. Now that we mapped the requests for the home page request, we can focus on writing some tests for our application.
