---
layout: post
intro: true
featured: true
title:  "Reproducing Bugs"
uniqueID: "reproducingBugs"
description: "Defining the steps to reproduce a bug or unexpected outcome of a test is crucial. This is my usual approach."
banner: "/images/posts/bug.jpg"
date:  2015-11-11 14:31:11
tags: ["quality-assurance", "bugs", "QA", "testing"]
---

# Reproducing Bugs

Since my youth I have had an inclination in finding unique ways to crash applications, forms, games and computers. This skill, if you will, has come handy in many ways. Particularly in Quality Assurance.

So what is testing? It can be briefly described as the usage of applications to fulfill a [user story](https://en.wikipedia.org/wiki/User_story). Reproducing bugs, is just one important responsibility expected from Quality Assurance Engineers.

## Questions to ask

When filing bugs, or jotting down [steps-to-reproduce](https://en.wikipedia.org/wiki/Software_bug), you should try to have the following information:

1. `Where the issue was observed?`
2. `What site was this on?`
2. `What browser/device was used?` Provide a URL, account name, device model, version if possible.
3. `What are the steps to reproduce?` Be as detailed as possible. Sometimes issues can seem really obvious to you, and the steps you performed seem unimportant. They aren't. Developers need this information to help debug the issue. QA needs this information to be able to completely validate that the issue was fixed.
4. `What was the expected result?` Again, even if it seems obvious, go ahead and put the obvious expected result. This piece of information is not only vital in knowing how to fix the issue, but it's vital to QA to know what success will look like for the issue. In addition to the documentation aspect, this information can also save much wasted time and effort, as it lets all parties know what's expected. Maybe what the reporter expected is actually incorrect, and it is performing as it should. Maybe what the reporter expects is different from what the person working on the issue thinks should happen. Having the expectation allows that conversation to take place before work is started on the ticket and time is wasted.
5. `What was the actual result?` What actually happened when you performed the steps in #2? Please be descriptive in what the actual result was. This helps the person working on the ticket ensure that they have accurately reproduced the issue. It also exists to provide a clear contrast for the expected result.

##### Other things that you should include in your bug ticket:

1. Any specification documents relating to the functionality. This helps provide a trail and additional information when working on the issue.
2. Screenshots or video of the issue. Sometimes a picture is worth a thousand words, and a video is worth exponentially more than that. These can provide insight into the issue that a written description never could.

## Bug Tracking Software

JIRA is a proprietary product developed by Atlassian. It provides bug tracking, issue tracking, and project management functions.

### Create an Issue

<img width="100%" src="/images/posts/jira-create-issue.png">
