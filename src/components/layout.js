import React from 'react'

import './global.css' 

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <div className='bg-slate-100'>
        <main>{children}</main>
        </div>
      </>
    )
  }
}

export default Template
