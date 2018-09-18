---
layout: post
intro: false
featured: false
title: Automation w/ Behat & Mink
uniqueID: "automationWBehatMink"
description: "Behat and Mink have been developed by the open source community and are led by our friend and yours, Konstantin Kudryashov."
banner: ""
date: 2014-07-12 17:33:05
tags: ["behat", "automation", "testing", "php", "mink"]
---

## Introduction

Behat and Mink have been developed by the open source community and are led by our friend and yours: Konstantin Kudryashov [@everzet](http://twitter.com/everzet). The Behavior-Driven Development (BDD) philosophy with Behat & Mink will make QA Engineers and the like, functional-testing experts.

> Why test your application? Well imagine you are running Jurassic Park, you need to know that adding the new Pterodactyl exhibit won't turn off the electric fence around the velociraptor pen.

## Installation

We need to install a few libraries. Let's start by creating a new directory and adding a `composer.json` file. Composer is a tool that helps download external libraries into your project.

We'll be downloading Behat, Mink, and a few other related libraries into our project.

### 1. composer.json

To make this easy, we've prepared a gist with exactly what you need to add to your `composer.json`.

```json
{
  "require":{
    "behat/mink": "1.4@stable",
    "behat/mink-goutte-driver": "*",
    "behat/mink-selenium2-driver": "*",
    "behat/behat": "2.4@stable",
    "behat/mink-extension": "*"
  },
  "minimum-stability": "dev",
  "config": {
  "bin-dir": "bin/"
  }
```

### 2. Downloading Composer

Next, download [composer](https://getcomposer.org/download/). Copy one of the two code blocks, depending if you have curl installed, and paste into the terminal. This downloads a standalone `composer.phar` executable.

### 3. Downloading Libraries

Next, tell Composer to download the libraries we need by running:

```bash
php composer.phar install --prefer-dist
```

### 4. behat.yaml

Next, create a `behat.yml` file at the root of the project. When Behat runs, it looks for a `behat.yml` file, which it uses for its configuration.

```yaml
default:
  extensions:
    Behat\MinkExtension\Extension:
      goutte: ~
      selenium2: ~
      base_url: http://en.wikipedia.org/
```

## Behat Initiation

To get the project ready to use Behat, run:

```bash
php bin/behat --init.
```

This creates a `features/` directory and a `bootstrap/FeatureContext.php` file inside of it.

Open `FeatureContext.php` and replace BehatContext:

```php
...
use Behat\MinkExtension\Context\MinkContext;

class FeatureContext extends MinkContext
  {
    ...
  }
```

## Writing Features & Running Tests

The Behat and Mink libraries are most commonly used to test web applications. You describe a feature in a human-readable syntax called Gherkin, then execute these as tests.

First, forget about tests. Our goal is to describe the feature. We're going to describe the Wikipedia search, so **create a "search.feature" file in the features directory.** The language in this file is called Gherkin and you start by describing the feature using a specific, four-line syntax.

```gherkin
Feature: Search
	In order to find a word definition
	As a website user
	I need to be able to search for a word
```

Each feature has many scenarios, which describe the specific behavior of the feature. Each scenario has 3 sections. Given which details the starting state of the system, When which includes the action the user takes, and Then which describes what the user sees after taking action. In this scenario, we're searching for an exact article that matches.

```gherkin
Feature:
	...
	Scenario: Search for a word that exists
	Given I am on "/wiki/Main_Page"
	When I fill in "search" with "Velociraptor"
	And I press "searchButton"
	Then I should see "an enlarged sickle-shaped claw"
```

Writing Features and Scenarios is great, because it helps clarify how something should work in human-readable language. But the real magic is that we can run the scenario as a functional test!

To do this, run:

```bash
php bin/behat
```

Behind the scenes, this reads the scenario and actually uses a real browser to go to Wikipedia, fill in the field, and click the button!


To see how this is possible, execute Behat, but pass a `-dl` option:

```bash
php bin/behat --dl
```

Behat's job is to read each line in the scenario and execute some function inside our FeatureContext class. Because we're using Mink, we inherit a lot of common sentences. You can use these to write tests without writing any PHP code. You can also invent your own sentence and then create a new method in the FeatureContext class. We'll talk a lot more about this later.

## Implementing Selenium & Testing JavaScript

Our first scenario ran in the background using a headless browser called [Goutte](https://github.com/fabpot/Goutte). Goutte runs very fast, you know like a velociraptor, but it doesn't support Javascript.

Let's download [Selenium Server](http://docs.seleniumhq.org/download/), which is just a jar file that can live anywhere on your computer. Start Selenium at the command line by running the below from the folder it's located in.

```gherkin
java -jar selenium-server-standalone-<YOURVERSION>.jar
```

##### Example

```bash
java -jar selenium-server-standalone-2.31.0.jar
```

This starts the Selenium server. To continue using terminal, you'll need to open a new tab/window.

Add an `@javascript` tag to your feature:

```gherkin
@javascript
Feature: Search
	In order to find a word definition
	...
```

From the project window, run your tests again:

```bash
php bin/behat
```
