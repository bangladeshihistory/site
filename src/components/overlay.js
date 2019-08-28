import React from 'react'
import Link from 'gatsby-link'
import FeaturedArchive from './featured-archive'
import $ from 'jquery'

class Overlay extends React.Component {
  render() {
    return (
      <header
        className='masthead'
        id='featured'
        style={{
          backgroundImage: 'url("images/home-bg.jpg")'
        }}
       >
        <div className='overlay'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              <div className='site-heading'>
                <div className='d-none d-sm-block'>
                  <img src='/images/bhmp.png' alt='bhmp-logo' className='img' style={{maxWidth: '266px'}}/>
                  <h1>Bangladeshi Historical Memory Project</h1>
                </div>
                <div className='d-block d-sm-none'>
                  <img src='/images/bhmp.png' alt='bhmp-logo' className='img' style={{maxWidth: '99px'}}/>
                  <h2>Bangladeshi Historical Memory Project</h2>
                </div>
                <p className='subheading padding-top-lite'>
                  A digital archive <br />
                  documenting Bangladeshi
                  <br />
                  <span id='js-rotating' style={{fontWeight: '700', lineHeight: '1.6'}}> history., art., people., culture., lives., stories., politics., revolution., rebellion.</span>
                  <script>{(function($){
                    $(function(){
                        $('#js-rotating').Morphext({
                            // The [in] animation type. Refer to Animate.css for a list of available animations.
                            animation: 'fadeIn',
                            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
                            separator: ',',
                            // The delay between the changing of each phrase in milliseconds.
                            speed: 2000,
                            complete: function () {
                                // Called after the entrance animation is executed.
                            }
                        })
                      })
                    })(jQuery)}
                  </script>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Overlay
