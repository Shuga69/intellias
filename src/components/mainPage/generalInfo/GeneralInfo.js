import React from 'react'
import SimpleText from '../../simpleText/SimpleText'
import Title from '../../title/Title'


import './GeneralInfo.css'
const GeneralInfo = (props) => {
    const textStyle={
        marginTop:42
    }
    return (
        <div className="general-info__inner">
            <div className="general-info-text-section">
                <Title text={props.title}/>
                <SimpleText style={textStyle} text={props.text}/>
            </div>
            <img width="554px" height="390px" alt="General info" src={props.image}/>
            </div>
    )
}

export default GeneralInfo
