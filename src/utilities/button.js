import React from 'react'
import * as styles from './button.module.css'
const Button = ( { url,label } ) => {
  return (
    <div>
    <a href={url} rel="noreferrer" target='_blank' className={`${styles.btn} bg-orange-500 text-white text-sm font-bold `}>
      {label}
    </a>
    </div>
  )
}

export default Button