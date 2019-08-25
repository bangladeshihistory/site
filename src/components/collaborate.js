import React from 'react'
import Link from 'gatsby-link'

import { scale } from '../utils/typography'
class Collaborate extends React.Component {
  render() {
    return (
      <div className='container padding-top'>
        <div>
          <p>
            The Bangladeshi Historical Memory Project is a collaborative people’s history of a region of 160 million stories, and over 6 million migrants all over the world; a history realized through a participatory model using our stories as tools for liberation.
          </p>
          <p>
            This is a collaborative project that is seeking innovative Bangladeshi folks across the diaspora who are seeking to work in Bangladeshi community to design a political theater and digital archive collective. We're looking for Bangladeshi artists, creators, writers, visionaries and changemakers. Are you a graphic designer? Singer? Documentarian? Painter? Actress? <a href='mailto:sajjad@withpulp.com' target='blank' style={{ color: '#DA291C', boxShadow: 'none', textDecoration: 'none', }} > We'd love to collaborate with you! </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Collaborate
