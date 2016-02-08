console.log('Welcome fellow developer or Web Inspector connoisseur.');
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact me via sajjad@withpulp.com.');
    console.log('Fork me from https://github.com/sajjadhossain/resume-builder.');
    // Smooth scroll https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    // Rotating text
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
});
// For Twitter and Instagram
//document.addEventListener('DOMContentLoaded', function() {
    //// Clean function
    //function clean(string) {
    //    // All your regexps combined into one:
    //    var re = /@(~lb~|~rb~|~qu~|~cn~|-cm-)@|([{}":,])/g;
    //
    //    return string.replace(re, function(match,tag,char) {
    //        // The arguments are:
    //        // 1: The whole match (string)
    //        // 2..n+1: The captures (string or undefined)
    //        // n+2: Starting position of match (0 = start)
    //        // n+3: The subject string.
    //        // (n = number of capture groups)
    //
    //        if (tag !== undefined) {
    //            // We matched a tag. Replace with an empty string
    //            return "";
    //        }
    //
    //        // Otherwise we matched a char. Replace with corresponding tag.
    //        switch (char) {
    //            case '{': return "@~lb~@";
    //            case '}': return "@~rb~@";
    //            case '"': return "@~qu~@";
    //            case ':': return "@~cn~@";
    //            case ',': return "@-cm-@";
    //        }
    //    });
    //}

    //var tweets = $( document.getElementsByClassName( 'twitter-content' ) );
    //var isExist = tweets.is( ':visible' );
    //
    //if ( isExist === true ) {
    //    $( tweets ).each(function( count ) {
    //        var getUrl = tweets[count].innerText.match(/http[:/A-Za-z0-9\.-]{1,}/g);
    //        var getHash = tweets[count].innerText.match(/#[0-9A-Za-z]{1,}/g);
    //        var getMentions = tweets[count].innerText.match(/@[0-9A-Za-z]{1,}/g);

            //switch ( getUrl ) {
            //    case getUrl >= 2:
            //        break;
            //    default:
            //        var replaceUrlHashAndMentions = tweets[count].innerHTML
            //            .replace(/http[:/A-Za-z0-9\.-]{1,}/g, '<a class="truncate" href="' + getUrl + '" target="_blank">' + getUrl + '</a>')
            //            .replace(/#[0-9A-Za-z]{1,}/g, '<a href="http://twitter.com/' + getHash + '" target="_blank">' + getHash + '</a>')
            //            .replace(/@[0-9A-Za-z]{1,}/g, '<a href="http://twitter.com/' + getMentions + '" target="_blank">' + getMentions + '</a>');
            //
            //        tweets[count].innerHTML = replaceUrlHashAndMentions;
            //}
//        });
//    }
//});