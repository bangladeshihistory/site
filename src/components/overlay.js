import React from 'react'
import Link from 'gatsby-link'
import Featured from './featured'

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
                <h1>Tech.</h1>
                <span className='subheading'>
                  A <a href='https://www.gatsbyjs.org' target='blank'>GatsbyJS</a> blog,
                  hosted on <a href='https://www.linode.com/' target='blank'>Linode</a>,
                  shipped in a <a href='https://www.vagrantup.com/' target='blank'>Vagrant</a>,
                  built with <a href='https://circleci.com' target='blank'>CircleCI</a>,
                  and tested with <a href='https://jestjs.io/' target='blank'>Jest</a> BDD.
                </span>
                <br />
                <div id='spotlight'>
                  <h2>Spotlight</h2>
                  <Featured />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Overlay
