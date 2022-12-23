import React from 'react'
import SvgIcons from '../../assets/icons/SvgIcons'
import './Button.scss'

const Button = ({children, click}) => {
  return (
    <button onClick={click} className='button'>
        {children}
    </button>
  )
}
export default Button