import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button {...props} className={"custom-btn "+props.type}>
            {props.text}
        </button>
    )
}

export default Button
