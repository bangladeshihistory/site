import React from 'react'
import { Link } from 'gatsby'
import Navbar from './navbar'
import Footer from './footer'
import About from './about'
import Overlay from './overlay'

import fontAwesome from '../../static/vendor/fontawesome-free/css/all.min.css'
import bootstrapCSS from '../../static/vendor/bootstrap/css/bootstrap.css'
import cleanBlogCSS from '../../static/vendor/bootstrap/css/clean-blog.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let display
    let nav

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
            <div className='padding-top three-dots'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {children}
          </section>
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
        <div id='siteContent'>
          <section
            id=
            'postContent'
          >
            {children}
          </section>
        </div>
      )
    }
    return (
      <div>
        {nav}
        {display}
        <About />
        <Footer />
      </div>
    )
  }
}

export default Template
