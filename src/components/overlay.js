import React from 'react'
import Link from 'gatsby-link'
import FeaturedArchive from './featured-archive'

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
              <div
                className='site-heading'>
                <h1>Bangladeshi Historical Memory Project</h1>
                <span className='subheading'>
                  A digital archive documenting Bangladeshi history, art, people, culture, lives, stories, politics, revolution and rebellion.
                </span>
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
