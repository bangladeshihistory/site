---
layout: post
intro: false
featured: false
title:  "Behat & Mink Cheat Sheet"
description:  "A basic cheat sheet for Behat and Mink, based on Lepine's and Kudryashov's references and guides."
banner: "http://localhost:4000/images/posts/banners/behat.jpg"
date: 2014-07-14 12:11:11
tags: behat automation testing php mink
---

## New to Behat?
1. [What is behavior driven development?](/2014/07/15/Behavior-Driven-Development-w-Gherkin.html)
2. [Get started with Behat and Mink](/2014/07/12/Automation-With-Behat-And-Mink.html)

## Behat

* pear channel-discover pear.symfony.com
* pear channel-discover pear.behat.org
* pear install behat/behat

### Command Line

| Command (w/ behat) | Purpose |
| --- | --- |
| --init | Create the features directory |
| --config={file}.yml | Use config file |
| --format=html –out=report.html | Html Report |
| --expand | Display details |
| --story-syntax --lang=fr | in French |
| --tags='@{tag1},@{tag2}' | Run tags |

### Feature

	Feature: Descriptive text of what is desired
	 In order to realize a named business value
	 As an explicit system actor
	 I want to ...

		 Scenario: Some determinable business situation
		 Given some precondition
		 And some other precondition
		 When some action by the actor
		 And some other action
		 And yet another action
		 Then some testable outcome is achieved
		 And something else we can check happens too
		 Scenario: A different situation
		 
#### Using Examples
	Scenario Outline: Some determinable business situation
	 Given I have <initialAmount> euros
	 When I add <money> euros
	 Then I should have now <finalAmount> euros
	 Examples:
	 | initialAmount | money | finalAmount |
	 | 15 | 5 | 20 |
	 | 40 | 10 | 50 |
	 | 20 | 5 | 25 |
	 
#### Surf Actions
	I am on "url"
	I go to "url"
	I reload the page
	I move backward one page
	I move forward one page
	I press "button"
	I follow "link"
	
#### Forms
	I fill in "form_element" with "value"
	I fill in "value" for "form_element"
	I fill in the following
	I select "form_option" from "form_select"
	I additionally select "form_option" from "form_select"
	I check "form_checkbox"
	I uncheck "form_checkbox"
	I attach the file "/path/file.file" to "form_file"

#### Assertions
	I should see "content"
	the response should contain "content"
	I should not see "content"
	the response should not contain "content"
	the "form_element" field should contain "value"
	the "form_element" field should not contain "value"
	the "form_checkbox" checkbox should be checked
	the "form_checkbox" checkbox should not be checked
	I should be on "page"
	the url should match "url"
	the "num_position" element should contain "value"
	I should see "value" in the "element" element 
	I should see an "element" element
	I should not see an "element" element 
	I should see number "element" elements
	the response status code should be code

### Mink
* pear channel-discover pear.symfony.com
* pear channel-discover pear.behat.org
* pear install behat/mink-beta

#### Session
	$session = new \Behat\Mink\Session($driver);
	$session->start(); // start
	$session->reset(); // soft-reset:
	$session->restart(); // hard-reset:

#### From the main context
	$session = $this->getSession();

#### From a sub-context
	$session = $this->getMainContext()->getSession();

| Step Definition | Purpose |
| --- | --- |
| isStarted() | Checks whether session was started |
| start() | Starts session |
| stop() | Stop session |
| restart() | Restart session| 
| reset() | Reset session |
| getPage() | Returns page element |
| getSelectorHandler() | Returns Selector Handler |
| visit($url) | Visit specified URL |
| setBasicAuth($u,$p) | HTTP Basic authentification |
| setRequestHeader($n,$v) | Set request header |
| getResponseHeaders() | Get all response headers |
| setCookie($n,$v) | Sets cookie |
| getCookie($n) | Returns cookie |
| getStatusCode() | Returns response code |
| getCurrentUrl() | Returns current URL |
| reload() | Reload current page |
| back() | Moves backward |
| forward() | Move forward |
| executeScript($script) | Executes javascript |
| evaluateScript($script) | Returns javascript' response |
| wait($time, $condition) | Waits some time or until javascript condition is true | 

#### Elements
	$el->has($selector, $locator)
	$el->find($selector, $locator)
	$el->findAll($selector, $locator)
	$el->getText()
	$el->getHtml()

#### HTML Nodes
	$el->isVisible()
	$el->getValue()
	$el->getTagName()
	$el->getXpath()
	$el->hasAttribute($name)
	$el->getAttribute($name)

#### Forms
	$el->press()
	$el->check()
	$el->uncheck()
	$el->isChecked()
	$el->selectOption($option, $multiple)
	$el->attachFile($path)
	$el->keypress()
	$el->keyDown()
	$el->keyUp()
	
#### Events
	$el->click()
	$el->doubleClick()
	$el->rightClick()
	$el->mouseOver()
	$el->focus()
	$el->blur()
	$el->dragTo($element)

### Default behat.yml Configurations
	default:
	  context:
	    parameters:
	      default_session: goutte
	      javascript_session: sahi
	      base_url: http://localhost
	      browser: firefox
	      goutte:
	        zend_config:
	          adapter: Zend\Http\Client\Adapter\Proxy
	          proxy_host: host.com
	          proxy_port: 8080
	        sahi:
	          host: localhost
	          port: 9999
	        zombie:
	          host: 127.0.0.1
	          port: 8124
	          node_bin: node
	          auto_server: true
	        selenium:
	          host: localhost
	          port: 4444
	        webdriver:
	          host http://localhost:4444/wd/hub

### Available Drivers

1. [Goutte](https://github.com/fabpot/Goutte)
2. [Sahi](http://sourceforge.net/projects/sahi/)
3. [Zombie](http://zombie.labnotes.org/)
4. [Selenium (1 & 2 )](http://seleniumhq.org/)