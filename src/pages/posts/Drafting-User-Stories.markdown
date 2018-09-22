---
featured: false
intro: true
title:  "Drafting User Stories"
uniqueID: "draftingUserStories"
description:  "When reverse engineering, the work ahead may seem very daunting. Keeping the User Story model for creating MVPs should help lessen the burden."
shortName: "✏️"
banner: "/images/posts/code.jpg"
date:   2015-10-25 13:22:29
tags: ["automation", "gherkin", "cucumber"]
---

## Automation

From test strategy to execution, automating tests requires attention to details. I'll show you with some examples by automating some tests based on the scope of a web application.

It is a simple web site...

> But within the monsters' heart lies many micro-services, applications and dependancies.
In order for test automation to fulfill its heroic purpose, we need information beforehand. Or we should put together some, at the very least in the form of user stories.

### Epic

This [user story](https://en.wikipedia.org/wiki/User_story) will serve as our epic, another way to describe the user experience in a more general scope.

```gherkin
As a user
I want an awesome web application
So that I can network with passionate minds.
```

Once I've defined an epic that meets the [Minimally-Viable Product (MVP)](https://en.wikipedia.org/wiki/Minimum_viable_product) criteria, I can start creating some features for that story.

### Features

Features are also written in the form of [user stories](https://en.wikipedia.org/wiki/User_story). The exception in this case being that we get to use more details.

```gherkin
As a user
I want to see an example of automation
So that I can understand its purpose

As a user
I want to see examples of bug reproducing and triaging
So that I can understand its purpose

As a user
I want to have a portfolio
So that I can share my code, blog posts and resume

As a user
I want to have a point of contact
So that others can discuss consulting opportunities and Batman.
```

How many features are used is entirely decided by how large the application is. Or the scope of the MVP. Maybe we can define a story here and refer to it in a later [sprint](https://en.wikipedia.org/wiki/Sprint_(software_development)).

### TDD

This can be looked at a couple of ways, but because I am a tester, I'd like to look at it the test-driven development way. This allows me to start writing tests that define how my application behaves then write code to make those tests pass, in most cases.

But sometimes I find myself implementing testing and automation during the latter half of the software development life cycle.  And even in that case, the same software used for test-driven development, can help create scaleable testing in a really short time! Let's discuss some methodologies.

### Approach

First, we want to test that the entire application. As a regression suite. Make sure everything is up and running. This is also known as smoke tests, sometimes apart of a user acceptance test suite.

I have my web application. The application itself has a ton of dependancies, but being that I developed the app itself, I am aware of the main bottlenecks and areas of concern. Next, we can start piecing together our framework to achieve testing.
