import React from 'react'
import Link from 'gatsby-link'
import FeaturedArchive from './featured-archive'
import TextLoop from 'react-text-loop'
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
                <div className='subheading padding-top-lite'>
                  A digital archive <br />
                  documenting Bangladeshi
                  <br />
                  <TextLoop>
                    <span>history.</span>
                    <span>art.</span>
                    <span>people.</span>
                    <span>culture.</span>
                    <span>lives.</span>
                    <span>stories.</span>
                    <span>lives.</span>
                    <span>stories.</span>
                    <span>politics.</span>
                    <span>revolution.</span>
                    <span>rebellion.</span>
                  </TextLoop>{''}
                </div>
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
