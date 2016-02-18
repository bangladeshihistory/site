var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var twitter = require('simple-twitter');
    var writeson = require('writeson');
    var main = require('../index');
    //var twitterData = require(main.data + '/tweets.json');
    var events = require(main.data + '/events.json');
    var posts = require(main.data + '/events.json');
    var resources = require(main.data + '/events.json');

    //// Twitter data
    //var tweets = {};
    //var tweetsMainData = {};
    //
    //// Twitter auth
    //twitter = new twitter(
    //    '9X9BaZ8l8z0QomTLQLQTUT9JE', //consumer key from twitter api
    //    'UStkamfP9DepKOHLYhTbyjEqrGmkzsal5aQ0hbaF8Rc8RRczbU', //consumer secret key from twitter api
    //    '4484736328-eBY1sqKtXH4Ng9AT4pvWBAV4GR0rb0vpI8enPJ6', //acces token from twitter api
    //    'CBVFXD1QGFiptcn81u4h7HqyWII3kBMmZVjLWQLggYpmy', //acces token secret from twitter api
    //    3600  //(optional) time in seconds in which file should be cached (only for get requests), put false for no caching
    //);
    //
    //// Twitter on:get
    //twitter.on('get:statuses/user_timeline', function(error, data) {
    //    // Get three tweets
    //    var i = -1;
    //
    //    do {
    //        i++;
    //        tweets[i] = data[i];
    //    }
    //    while (i < 2);
    //
    //    // Store them to JSON
    //    writeson(main.path + '/data/tweets.json', tweets, function(err) {
    //        if(err) return console.err(err);
    //    });
    //});
    //
    //// Twitter get
    //twitter.get('statuses/user_timeline');
    //
    //// Get three tweets from storage and refine
    //var i = -1;
    //
    //do {
    //    i++;
    //    tweetsMainData[i] = {
    //        "user": twitterData[i]['user']['screen_name'],
    //        "date_created": twitterData[i]['created_at'],
    //        "content": twitterData[i]['text'],
    //        "retweets": twitterData[i]['retweet_count'],
    //        "favorite_count": twitterData[i]['favorite_count']
    //    }
    //}
    //while (i < 2);
    //
    //// Store them to refined JSON
    //writeson(main.path + '/data/tweets-refined.json', tweetsMainData, function(err) {
    //    if(err) return console.err(err);
    //});

    // Render with tweets and grams
    res.render('index',
        {
            title: 'Bangladeshi Historical Memory Project',
            //tweets: tweetsMainData,
            events: events,
            posts: posts,
            resources: resources,
            tweeter: 'bangladeshihistry',
            instagrammer: 'bangladeshihistory'
        }
    );
});

module.exports = router;
