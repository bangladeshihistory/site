import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link rel='stylesheet' type='text/css' href='/vendor/bootstrap/css/bootstrap.css'></link>
          <link rel='stylesheet' type='text/css' href='/vendor/bootstrap/css/clean-blog.css'></link>
          <link rel='stylesheet' type='text/css' href='/vendor/fontawesome-free/css/all.min.css'></link>
          <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet"></link>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src='/vendor/jquery/jquery.min.js'></script>
          <script src='/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
          <script src='/js/prism.js'></script>
          <script src='/js/clean-blog.js'></script>
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
