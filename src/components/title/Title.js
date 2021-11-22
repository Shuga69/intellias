import React from 'react'
import './Title.css'
const Title = (props) => {
    return (
        <h4 className ="section-title">
            {props.text}
        </h4>
    )
}

export default Title
