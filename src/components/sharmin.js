import React from 'react'
import Link from 'gatsby-link'

import { scale } from '../utils/typography'

class Sharmin extends React.Component {
  render() {
    return (
      <div className='col-lg-8 col-md-10 mx-auto'>
        <div className='padding-top d-none d-lg-block d-xl-block'>
          <div className='row'>
            <div className='col-lg-8'>
              <h1>📖</h1>
              <h3>Our Stories</h3>
              <small>
                With Bangladeshi residents of New York, the Bangladeshi Historical Memory Project works with oral histories to document the cultures of resilience in the Bangladeshi diaspora. In order to address the historical amnesia around our ancestral lineage, migration and partition stories, this archive serves as a place for historical memory.
              </small>
            </div>
            <div className='col-lg-4'>
              <h1>👩🏾‍💻</h1>
              <h3>Sharmin Hossain </h3>
              <small>This project is directed by Sharmin Hossain, a recipient of the 2015 Open Society Youth Exchange Fellowship.</small>
            </div>
          </div>
        </div>
        <div className='d-block d-sm-block d-lg-none'>
          <h1>📖</h1>
          <h3>Our Stories</h3>
          <small>
            With Bangladeshi residents of New York, the Bangladeshi Historical Memory Project works with oral histories to document the cultures of resilience in the Bangladeshi diaspora. In order to address the historical amnesia around our ancestral lineage, migration and partition stories, this archive serves as a place for historical memory.
          </small>
          <h1>👩🏾‍💻</h1>
          <h3>Sharmin Hossain </h3>
          <p>
            This project is directed by Sharmin Hossain, a recipient of the 2015 Open Society Youth Exchange Fellowship.
          </p>
        </div>
      </div>
    )
  }
}

export default Sharmin
