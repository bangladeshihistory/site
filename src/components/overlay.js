import React from 'react'
import Link from 'gatsby-link'

class Navbar extends React.Component {
  render() {
    return (
      <header
        className='masthead'
        style={{
          backgroundImage: "url('images/home-bg.jpg')"
        }}
       >
        <div
          className='overlay'
        ></div>
        <div
          className='container'
        >
          <div
            className='row'
          >
            <div
              className='col-lg-8 col-md-10 mx-auto'
            >
              <div
                className='site-heading'
              >
                <h1>MetaTerran</h1>
                <span
                  className='subheading'
                >
                  GatsbyJS blog, hosted on Linode, orchestrated Vagrant and CircleCI pipeline. Tested with Jest BDD.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
