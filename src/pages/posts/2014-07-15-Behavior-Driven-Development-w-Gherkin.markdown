---
layout: post
intro: true
featured: false
uniqueID:  "bddWGherkin"
title: "BDD w/ Gherkin"
description: "The idea is simple, write your tests first, and then write code until your tests pass. It helps clarify your goals before you spend time developing."
banner: "/images/posts/cucumber.jpg"
date: 2014-07-15 06:30:22
tags: ["behat", "testing", "automation", "gherkin"]
---

## Behavior Driven Development

The idea is simple, write your tests first, and then write code until your tests pass. It helps clarify your goals before you spend time developing. You also know that as soon as your tests all pass, you should stop working! This makes it harder to over-perfect your code.
Behavior-driven development, or BDD, is the next evolution.It's similar to TDD except that instead of writing tests first, we'll create written descriptions of the behavior of a feature. The father of all of BDD once wrote:

>Behavior is a more useful word than test. - Dan NorthOf course!

Writing tests is great, but before we do any work, we need to understand the exact behavior of the feature we're building.There are two styles of BDD - SpecBDD and StoryBDD. Roughly speaking, Spec is used for writing unit tests. In PHP, a wonderful library called PHPSpec exists to help with this style. In this course, we're talking about the other type, StoryBDD, which is typically used for functional testing. In an ideal world, you'll use both styles.If nothing else, BDD aims to solve the great problem of communication. Every project has a lot of players: developers, a client, project managers, velociraptors, pterodactyl and Samuel L. Jackson. As computer scientists, the development process is usually a bit of a goat rodeo, where nobody really understands the full goals or behavior of what's being built.BDD aims to fix this by giving us a standard language for describing these features. We'll also follow a workflow that will help make the whole process from "great idea" to development much more sane:

1. `Define` the business value of the features
2. `Prioritize` features by their business value.
3. `Describe` them with readable scenarios
4. `Implement` them.As a developer, this might look like boring business-talk.

But I've used this countless times to break a big idea into smaller pieces written in clear language. And for a developer, getting clear directions rocks!

Ok, all the theory is behind us, let's get to Gherkin, the language of BDD!

## Gherkin

### Writing Features

Gherkin is the language used to describe a feature and the scenarios that define its behavior. It originally came from Cucumber, the Ruby-equivalent of Behat and is just meant to be a natural, but structured feature story.

The feature template should look familiar: it consists of four lines that define the business value and user role:

```gherkin
Feature: <custom title>		
  In order to <benefit or value of the feature>		
  As a <user or role who will benefit from this feature>		
  I need to <short feature description>
```

The first line starts with `Feature`, followed by a short title. This line should quickly highlight the purpose of this feature, but otherwise isn't too important.The next two lines, however, are *very* important.

First, the `In order` to line defines the value. Why should we build this feature? Why is it important? Will it bring us more visitors or keep those visitors safe from dinosaur attack? The next line - starting with As a defines who will benefit from this value. Is it the admin user? Our normal web user? A defenseless park guest? If you have a hard time writing these first two lines, it's possible that this feature just isn't a good idea. After all, if we're going to spend time and money building something, shouldn't it have some value for a specific person?Finally, the last line - starting with

`I need to` - is a short description of the types of actions the user will be able to take once this feature is complete.

##### Example

```gherkin
Feature: News admin panel		
  In order to maintain a list of news		
  As a site administrator		
  I need to be able to add/edit/delete news
```

The reason behind this is simple. The *only* reason we're spending money to build the feature is to benefit this one user type. If we can't even explain the feature using their language, then our feature is either too technical for that user, has no business value, or actually benefits some other user. It's also helpful to imagine that this user is actually requesting the feature from you, using their own language. In the real world, keeping the language simple also means that you can write features and then send them back to the client for approval.

### Prioritizing

Now that we've broken the big idea down into 3 features, we can prioritize which we should work on first. And since we've focused on business value, this is easy: just choose the feature that has the most. Alternatively, if you need to make your admin users happy immediately, you might choose features that benefit those users. We'll start with the news admin panel.

Prioritizing might not be something you normally do, but now it's easy. You can make sure you repair the T-Rex fence before you send your first group of visitors into the park.### Writing ScenariosOnce you've chosen a feature, it's time to write scenarios that describe each part of it. As we saw earlier, each scenario follows a very specific pattern. Start by giving it a name.

```gherkin
Feature: News admin panel
  Scenario: List available news
```

The body of a scenario is made up of three different parts: `Given`, `When` and `Then`.

The first is `Given`, which describes the initial state of the system for the scenario. This is the only place where you can describe things that he user can't do. In this case, the "site administrator" can't magically put 5 news entries in the database, but that's ok. To have more than one `Given` statement, start the next line with `And`.The second part of each scenario is `When`, which describes the actual action that this user is taking. Finally, `Then` is used to describe what our user can see at the end of the scenario.The exact language you use in your scenarios is up to you - just make sure to follow the Given, When, Then format.

Each line in the scenario is called a "step", and should plainly describe what the user is doing and seeing.

```gherkin
Feature: News admin panel
  Scenario: List available feeds
  ...
  Scenario: List available news		
    Given there are 5 news articles		
    And I am on "/admin"		
    When I click "News"		
    Then I should see 5 news items
```

If we didn't go any further, we would at least have a standard way of describing our features. Writing scenarios also makes you think through each feature in more detail. When you're finished, you've got a blueprint for exactly what you need to develop, written in language that your client can understand.
