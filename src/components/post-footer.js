import React from 'react'
import Link from 'gatsby-link'

import { scale } from '../utils/typography'

class PostFooter extends React.Component {
  render() {
    return (
      <div className='col-lg-8 col-md-10 mx-auto padding-top'>
        <div className='row'>
          <div className='text-center'>
            <h1>✊🏾</h1>
            <h2>Our Mission</h2>
            <p>
              The Bangladeshi Historical Memory Project is an interactive visual and narrative based digital archive & political theater project documenting the history & resilience of Bangladeshi people. Combining historical and contemporary media, this project explores art, literature, culture, history, and revolution.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostFooter
