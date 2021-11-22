import React from 'react'
import './SimpleText.css'
const SimpleText = (props) => {
    return (
        <p {...props} className="simple-text">{props.text}</p>
    )
}

export default SimpleText
