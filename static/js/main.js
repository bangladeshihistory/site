(function($) {
  'use strict'; // Start of use strict
  console.log(`👩🏾‍💻: Welcome Fellow Developer`);

  var prevScrollpos = window.pageYOffset;



  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('mainNav').style.transition = 'all 0.25s ease 0s';
      document.getElementById('mainNav').style.top = '0';
    } else {
      document.getElementById('mainNav').style.transition = 'all 0.25s ease 0s';
      document.getElementById('mainNav').style.top = '-105px';
    }
    prevScrollpos = currentScrollPos;
  }
})(jQuery); // End of use strict
