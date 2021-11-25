import React from 'react'
import SimpleText from '../../simpleText/SimpleText'
import './ChartElement.css'

const ChartElement = (props) => {
    
    const position={
        left: props.left
    }
    const positionStyle={
        fontSize: 8,
        color: "#3F5C6F",
        fontWeight: 600
    }
    const creditionalsStyle={
        fontSize: 8,
        color: "#3F5C6F",
        fontWeight: 400,
        
    }
    return (
        <div style={position} className="user-chart-container">
            <div className={`user-chart-header ${props.header}`}>
                <SimpleText style={positionStyle} text={props.position}/>
            </div>
            <div className="user-chart-info">
                <img src={props.img}/>
                <SimpleText style={creditionalsStyle} text={props.creditionals}/>
            </div>
        </div>
    )
}

export default ChartElement
