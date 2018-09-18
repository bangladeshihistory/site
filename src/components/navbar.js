import React from 'react'
import Link from 'gatsby-link'

import { scale } from '../utils/typography'

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className='navbar fixed-top'
        id='mainNav'
      >
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
                to={'/'}
              >
                🚀
              </Link>
            </h1>
          </div>
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
              to='/about'
              >
              👨‍🚀
            </Link>
          </h1>
        </div>
      </nav>
    )
  }
}

export default Navbar
