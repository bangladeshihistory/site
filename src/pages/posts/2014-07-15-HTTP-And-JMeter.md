---
layout: post
intro: false
featured: false
title: "HTTP And JMeter"
uniqueID: "httpAndJMeter"
description: "Use JMeter to script tests against API's, chain them so they actually resemble a real request."
banner: ""
date: 2015-09-20 06:30:22
tags: [ "jmeter", "testing", "api", "charles" ]
reference: 'http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/'
---

# JMeter

Please make sure to have the latest version of "Firefox" downloaded.

## Charles (Blackbox Testing)

If prefferred, locally download [Charles](http://www.charlesproxy.com/download/). This tool, alongside JMeter, is an equally powerful tool that tells you what exactly is going on. It can even be used to sniff iOS and Android http/https requests, let alone API's.  

As soon as you open Charles and play around outside the app, you'll notice data being collected in the left-tab. Every HTTP/HTTPS request being made is monitored. So if you're confused about a call and how it should look in JMeter, when a similar tool is running, you can use this to parse all data collected.

## Remote Server or Local

Go to [Apache](http://jmeter.apache.org/download_jmeter.cgi) and download the latest **binaries**. Install and unzip.

Then go to: /bin/ApacheJMeter.jar and open the file. You'll need Java.

Or for remote in terminal run:

* sudo apt-get install jmeter jmeter-http

You should see a bunch of files downloading. Go through the above steps and start ApacheJMeter.

JMeter, locally, should look like:  

![Smaller icon](http://4.bp.blogspot.com/-yMoHp5V2BsE/T-oewRnXeII/AAAAAAAABrA/XXb44Y7jLcg/s1600/jmeter.png)

### JMeter Tests

* [Apache's JMeter Documentation](http://jmeter.apache.org/usermanual/build-web-test-plan.html)  
* [Step-by-Step Configuration and Execution](http://jmeter.apache.org/usermanual/jmeter_proxy_step_by_step.pdf)  
* [JMeter for Mac](http://www.anujgakhar.com/2010/06/23/stress-testing-your-website-with-apache-jmeter/)  

<br/>

### Sniffing HTTP Requests

1. **Right-click** on "Test Plan""
2. Add > Logic Controller > Recorder Controller
3. **Right-click** on "WorkBench"
4. Add > Non-test Elements > HTTP Proxy Server
5. Open "Firefox"
	1. Go through restart/install procedure, post-Charles installation
	2. Go to FireFox > Preferences > Advanced
		1. While in Network tab, select "Settings" for Connection section
		2. Change HTTP Proxy: to "localhost" Port: "8080" or something not used, note the port being used.
		3. Check "Use this proxy for all protocols"
		4. Save, all websites should fail until Proxy is started
6. Select HTTP Proxy Server
	1. In the Right, you should see "Global Settings" "Port: 8080" (by default)
	2. Set Port to "8080" or port selected from earlier
	3. On HTTP Proxy Server, click the “Add” button in “URL Patterns to Include”. This will create a blank entry. Enter “html”.
	4. Click the “Add” button in “URL Patterns to Exclude” 3 times. This will create 3 blank entries. After that enter “.png” pattern, “.gif” pattern and “.ico” pattern.
7. In the HTTP Proxy Server, you should see a "Start" button on bottom, press start
8. In FireFox, go to any website of your choice.
	1. Notice the left-pane, similar to Charles.app, JMeter now records all HTTP Requests and all assets being requested. Alongside with paths, JMeter is also recording Headers sent from your machine.

<br/>

### Load Tests

In this example we will run load tests against Google, lets hope they don't get mad :)  

While having JMeter open:

1. **Right-click** on "Test Plan"
2. Add > Threads > Thread Group
3. Rename the "Thread Group" to "Google.com Users"
	1. Set Number of Threads to 10
	2. Set Loop count to 2
4. **Right-click** on “Thread Group”, Add > Listener > Summary Report
5. **Right-click** on "Google.com Users"
6. Add > Sampler > HTTP Request
7. Add Server Name, "www.google.com", Add Path, "/", leave everything else empty
8. Press Play and viola, you've ran you're first Load Test using JMeter

<br/>

### CSV Config Element

In API’s we need to give inputs, there is a way in JMeter to provide inputs from csv file. You can create csv file of your inputs and provide this file to JMeter. JMeter will read your csv file line by line and provide this data to your http request. So how to provide inputs from csv file, it’s pretty simple. Create your csv file, I have created logindetails.csv file. Now right click on thread group and go to Add –> Config Element –> CSV data set Config.
