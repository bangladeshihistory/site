import React from 'react'
import Link from 'gatsby-link'
import About from './about'

import typography from '../utils/typography'

const scale = typography.scale

class PostNavbar extends React.Component {
  render() {
    return (
      <nav
        className='navbar fixed-top'
        id='mainNav'
      >
        <div className='nav-item'>
        </div>
        <div className='nav-item'>
        <h1
            style={{
              marginTop: '.8rem',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              🇧🇩
            </Link>
          </h1>
        </div>
      </nav>

    )
  }
}

export default PostNavbar
