import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar'
import About from './about'
import Footer from '../components/footer'
import Overlay from '../components/overlay'

import fontAwesome from '../utils/vendor/fontawesome-free/css/all.min.css'
import bootstrapCSS from '../utils/vendor/bootstrap/css/bootstrap.css'
import cleanBlogCSS from '../utils/vendor/bootstrap/css/clean-blog.css'

import { scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let display
    let nav

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      nav = (
        <div id='nav'>
          <Navbar />
        </div>
      )
      display = (
        <div
          id='siteContent'
        >
          <Overlay />
          <section
            className='margin-top-bottom'
            id='postsList'
          >
            {children()}
          </section>
        </div>
      )
    }
    else if (location.pathname === '/about') {
      nav = (
        <nav
          className='navbar fixed-top'
          id='mainNav'
        >
          <div
            className='nav-item'
          ></div>
          <div
            className='nav-item'
          >
            <h1
              style={{
                ...scale(1),
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to='/'
                >
                ✖
              </Link>
            </h1>
          </div>
        </nav>
      )
      display = (
        <div>
          <About />
        </div>
      )
    }
    else {
      nav = (
        <div id='nav'>
          <Navbar />
        </div>
      )
      display = (
        <div
          id='siteContent'
        >
          <section
            id=
            'postContent'
          >
            {children()}
          </section>
        </div>
      )
    }
    return (
      <div>
        {nav}
        {display}
        <Footer />
      </div>
    )

    require('../utils/vendor/jquery/jquery.min.js')
    require('../utils/vendor/bootstrap/js/bootstrap.bundle.min.js')
    require('../utils/js/prism.js')
    require('../utils/js/clean-blog.js')
  }
}

export default Template
