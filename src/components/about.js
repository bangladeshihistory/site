import React from 'react'
import Link from 'gatsby-link'
import Footer from './footer'

class About extends React.Component {
  render() {
    return (
      <div
        className='modal fade'
        id='about'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='aboutLabel'
        aria-hidden='true'
        style={{
          paddingRight: '0px'
        }}
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to='/#about'
              data-dismiss='modal'
              aria-label='Close'
            >
              <div className='modal-header'>
                <h1
                  className='close'
                  style={{
                    marginTop: '0px',
                    marginBottom: '0px',
                    marginRight: '-9px'
                  }}
                  aria-hidden='true'
                >
                  ✖
                </h1>
              </div>
              </Link>
              <div className='modal-body'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8 col-md-10 col-sm-12 mx-auto text-center'>
                      <h1>✊🏾</h1>
                      <h2>Our Mission</h2>
                      <p>
                        The Bangladeshi Historical Memory Project is an interactive visual and narrative based digital archive & political theater project documenting the history & resilience of Bangladeshi people. Combining historical and contemporary media, this project explores art, literature, culture, history, and revolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default About
