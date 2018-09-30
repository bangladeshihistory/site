---
featured: true
intro: true
title:  "Storytelling with Gatsby"
uniqueID: "storytellingWithGatsby"
description:  "Beginning with my user stories for my blog, this post details how I got from concept to reality in such a short time."
shortName: "👩‍🎤"
banner: "/images/posts/story.jpg"
date: 2017-08-15
tags: ["gatsby", "JS", "react", "blog"]
---


## My Epic

Like any technological effort, I start with the simplest user story.

```gherkin
As a developer,
I want a blog,
So that I can share my technological learnings
```

After engineering my user story, I had to research and outsource a lot of my design and experience practices to identify the best and most efficient way to go about this.

### Stack

As a next step, I defined my stack. These are the technologies and strategies will I explored and plan to implement to achieve my mission.

#### Linode

Since I love my [Linode](http://linode.com) dashboard and support staff, I decided to make this apart of my stack. I wanted to deploy to a production instance in a Linux environment, managed by Linode.

```gherkin
As a developer,
I want a Linode Linux instance,
So I can deploy my blog to a production instance.
```

#### Vagrant

I want to contain my application and its' dependancies in a virtual container with [Vagrant](http://vagrantup.com), so that I can reproduce and develop in a traceable fashion. This process of virtualization helps with testing a product stability. I can provision my machine with all the necessary dependancies, so that either I can access and reproduce my environment, or someone else can spin up a development environment in a short time.

```gherkin
As a developer,
I want a Vagrant VirtualBox
So I can use my Vagrantfile to provision my machine
```

##### References

* [Setting up a local Vagrant](https://medium.com/@JohnFoderaro/how-to-set-up-a-local-linux-environment-with-vagrant-163f0ba4da77)
* [Vargant and Linode](https://www.linode.com/docs/applications/configuration-management/vagrant-linode-environments#prerequisites)

</br>

#### CircleCI

After building my application, I want it tested on a continuous basis. I want to build my Vagrant and application every time I make and push a change to my GitHub. For this task, I chose [CircleCI](http://circleci.com). This tool was so easy to implement. With the change addition of one file to my git repository, and a hook implemented through the CircleCI GUI, I got my integration builds started in no time.

```gherkin
As a developer,
I want to build my application,
So that I can run integration tests with every change
```

##### References

* [CircleCI 2.0](https://circleci.com/docs/2.0/)

</br>

#### GatsbyJS

Traditional static site generators such as Jekyll let you put text or markdown in a specific directory such as pages/ in a version-controlled codebase. They then build a specific kind of site, usually a blog, as HTML files from the content you've added. These files can be cached and served from a CDN.
Content Management Systems (CMSs) like Wordpress give you an online text editor to create content. You customize the look and feel through choosing themes and plugins, or writing custom PHP or Javascript code. Content is saved in a database, which is retrieved and sent to users when they visit the website. Depending on your requirements you can self-host your website, or use an official hosting provider.

Site builders like Squarespace are a type of hosted closed-source CMS. They focus on making it fast to build a website; however, they don't allow self-hosting or enable you to export your website and customize it.

This is where [GatsbyJS](http://gatsbyjs.org) comes in. Gatsby lets you build blazing fast sites with your data, whatever the source. Liberate your sites from legacy CMSs and fly into the future.

```gherkin
As a developer,
I want a React blog,
So that I can use new technology to build an SPA
```

##### References

* [GatsbyJS](https://www.gatsbyjs.org/)
* [GatsbyJS on GitHub](https://github.com/gatsbyjs/gatsby)

</br>

#### Jest

As a tester, this is quite possibly the most important step for me to identify. I've only contributed to [Jest](jestjs.io) and Mocha-style BDD tests thus far, and this would be my first trial-by-fire implementation of the framework. It's great at mocking and testing components in an asynchronous fashion.

```gherkin
As a developer,
I want to import JestJS in to my application,
So that I can quickly test my components
```

##### References

* [Jest and React](https://jestjs.io/docs/en/tutorial-react)

</br>

### Design

As you can see, a bit of research went in to defining a stack that meets the needs of my project. The following design decision was made in a bit of a rush/ I chose the design and UI based on the following requirements. The blog:

* Needs to be extremely readable
* Needs to be strippable. I should easily be able to port the code into my framework
* Needs to be minimal
* Responsive
* Mobile first

After some research, I stumbled on to this `Clean Blog` design by [Bootstrap](http://getbootstrap.com).

```gherkin
As a developer,
I wanted to use a minimal, responsive CSS framework,
So that I can implement it into my GatsbyJS blog
```

##### References

* [Clean Blog - Template Overview](https://startbootstrap.com/template-overviews/clean-blog/)
* [Clean Blog - Hosted Demo](https://blackrockdigital.github.io/startbootstrap-clean-blog/)

</br>

I hope this post gave you some insight into the design and implementation process.
