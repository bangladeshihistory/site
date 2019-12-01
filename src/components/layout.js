import React from 'react'
import { Link } from 'gatsby'
import HomeNavbar from './home-navbar'
import PostNavbar from './post-navbar'
import FeaturedArchive from './featured-archive'
import FeaturedResources from './featured-resources'
import Footer from './footer'
import PostFooter from './post-footer'
import About from './about'
import Sharmin from './sharmin'
import Collaborate from './collaborate'
import Overlay from './overlay'

import fontAwesome from '../../static/vendor/fontawesome-free/css/all.min.css'
import bootstrapCSS from '../../static/vendor/bootstrap/css/bootstrap.css'
import cleanBlogCSS from '../assets/styles/main.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let display
    let nav

    if (location.pathname === rootPath) {
      nav = (
        <div id='nav'>
          <HomeNavbar />
        </div>
      )
      display = (
        <div
          id='siteContent'
        >
          <Overlay />
          <FeaturedArchive />
          <FeaturedResources />
          <About />
          <Collaborate />
          <Sharmin />
          <Footer />
        </div>
      )
    }
    else {
      nav = (
        <div id='nav'>
          <PostNavbar />
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
            {children}
          </section>
          <PostFooter />
          <Collaborate />
          <Sharmin />
          <Footer />
        </div>
      )
    }
    return (
      <div>
        {nav}
        {display}
      </div>
    )
  }
}

export default Template
