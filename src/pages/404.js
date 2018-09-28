import React from 'react'

class ErrorPage extends React.Component {
  render() {
    return (
      <div
        className='container'
        style={{
          paddingTop: '90px'
        }}>
        <div className='row'>
          <div className='col-lg-8 col-md-10 mx-auto'>
            <h1 style={{
              color: '#dc3545'
            }}>
              Error
            </h1>
            <p>You requested a page that doesn&#39;t exist... </p>
            <h2>Storytime!</h2>
            <p>The class teacher once asked me to name an animal that begins with an “E”.</p>
            <p>I said, “Elephant.”</p>
            <p>Then the teacher asks for an animal that begins with a “T”.</p>
            <p>Then I said, “Two elephants.”</p>
            <p>The teacher sends me out of the class for bad behavior.</p>
            <p>After that she asked for an animal beginning with “M”.</p>
            <p>I shouted from the other side of the wall: “Maybe an elephant!”</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorPage
