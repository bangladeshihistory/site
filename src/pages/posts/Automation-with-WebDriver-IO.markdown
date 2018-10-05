---
featured: false
intro: true
title:  "Automation with WebDriverIO"
uniqueID: "automationWithWebdriverIO"
description:  "Get Node. Get npm. Install the module. Boom! Start testing anything from websites to native applications."
shortName: "🎬"
banner: "/images/posts/code.jpg"
date: 2016-05-21
tags: ["automation", "webdriverio", "javascript", "testing"]
---

## This is simply the the best test framework.

New to JavaScript? New to coding? Automated testing? Not a problem. I am sure that regardless of you level of expertise, you can start writing and executing automated tests in no time.

## Get Started

1. Download [NodeJS](https://nodejs.org/en/download/)
2. Download [NPM](https://www.npmjs.com/package/npm)

Given you've installed the aforementioned requirements, go to your project. My project for instance is this application: [blog.sajjad.nyc](http://blog.sajjad.nyc). It doesn't matter what your directory looks like or what files or scripts help run your application.

From the root of the project, if your project is **not an npm project**, run `npm init`. You should see a prompt like this:

```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (Sites)
```
If your project already has a `package.json`, then you can just run `npm install <package> --save`. This installs the modules in the respected objects within `package.json`.

## Installation

1. npm install webdriverio@v3.2.5 -g
2. npm install mocha --save
3. npm install selenium-standalone@latest -g
4. npm install async --save
5. npm install chai --save
6. selenium-standalone install

## Make directories and files

Make a directory for your tests and specs:

```bash
mkdir test
mkdir test/data
mkdir test/specs
mkdir test/config
```

Then create some test files based on the features we chose to focus on in [our first post](/posts/Blackbox-Testing-Client-Side-Dependencies/).

```bash
touch test/specs/home.js
touch test/data/data.json
touch test/config/defaults.json
```

This is a scaled down version of some more examples you can find right [here](https://github.com/sajjadhossain/twoPoint0/tree/master/test/specs/regression)!

Now that we have some test files, we can start writing these tests. Open up `home.js` in your favorite editor. Copy and paste the below in to the file.

```js
// This is a smoke test for the home page
// Feature: I want to test my application home page
// As a tester
// I want to test the entire scope of the home page
// So that I can add the test to my regression suite

// To do things asynchronously
var async = require('async');
// Chai
var chai = require('chai');
// Curl with node, just cause
var request = require('request');
// Our JSONs
var defaults = require('../../config/defaults.json');
var defaultWait = defaults['webdriverio']['defaultWait'];
var data = require('../../data/data.json');
var assets = data['assets'];
var elements = data['elements'];

// Test all my applications assets
describe('Assets from /home', function() {
    // Use async to grab and forEach against each asset in data/urls.json
    async.each( assets, function( url ) {
        // Test and assert that urls should respond with 200
        it(url + ' should respond in 200', function ( done ) {
            // Use request to curl those urls
            request(url, function ( error, response, body ) {
                // Use chai to assert that the urls are responding with a 200 via request module
                chai.assert( response.statusCode === 200, url + ' did not respond with 200');
                // Finally, call done for each after each url has been tested
                browser.call( done );
            });
        });
    });
});
// Test all my applications elements
describe('Elements from /home', function() {
    async.each( elements, function( element ) {
        // Test and assert that elements should respond with 200
        it(element + ' should exist in the DOM', function ( done ) {
            // Use webdriverio to check if element exists, implicitWaitFor
            browser
                // Go to home url
                .url('/')
                // Wait 5000 ms for elements from JSON
                .waitForExist( element, defaultWait )
                // Assert state is true with callback
                .then(function( response ) {
                    // Assert with chai that the response callback was true
                    chai.assert( response === true, element + ' did not return with true state in DOM');
                })
                // Call done after test
                .call ( done );
        });
    });
});
```

You'll notice in the above, we `require` a `data.json`. Let's populate it with some data. For me I attained the below, as we did in an earlier post:

```json
{
  "assets": {
    "0": "http://www.sajjad.nyc/javascripts/vendor/classie.js",
    "1": "http://www.sajjad.nyc/javascripts/vendor/menu.js",
    "2": "http://www.sajjad.nyc/javascripts/vendor/materialize.min.js",
    "3": "http://www.sajjad.nyc/javascripts/vendor/init.js",
    "4": "http://www.sajjad.nyc/stylesheets/vendor/materialize.min.css",
    "5": "http://www.sajjad.nyc/stylesheets/vendor/pace.css",
    "6": "http://www.sajjad.nyc/stylesheets/style.css",
    "7": "http://www.sajjad.nyc/javascripts/vendor/jquery-1.11.3.min.js",
    "8": "http://www.sajjad.nyc/javascripts/main.js",
    "9": "http://www.sajjad.nyc/javascripts/vendor/pace.js",
    "10": "http://www.sajjad.nyc/javascripts/vendor/modernizr-2.8.3.min.js",
    "11": "http://fonts.googleapis.com/icon?family=Material+Icons",
    "12": "http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700,800",
    "13": "http://fonts.googleapis.com/css?family=Exo+2:300italic,100italic,200italic,200,900italic,300,400,100,400italic,900"
  }
}
```

In your projects' root directory, open `wdio.conf.js` and populate the file with:

```js
exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './test/visuals/',
    baseUrl: 'http://www.sajjad.nyc',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporter: ['spec'],
    mochaOpts: {
        ui: 'bdd'
    }
}
```

Add the following to `test/config/defaults.json`:

```js
{
  "webdriverio": {
    "viewportSize": {
      "width": "950",
      "height": "1000"
    },
    "defaultWait": "5000",
    "asyncWait": "1250",
    "asyncWaitMore": "3000"
  }
}
```

## Run the tests

Now you should be able to run:

```bash
wdio wdio.conf.js`
```

... and see an output like:

```bash
․․․․․․․․․․․․․․

14 passing (3.30s)
```
