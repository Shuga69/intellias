import React from 'react'
import SimpleText from '../../simpleText/SimpleText'
import './ChartElement.css'

const ChartElement = () => {
    
    const styleHeaderColor={
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
        <div className="user-chart-container">
            <div style={styleHeaderColor} className="user-chart-header">
                <SimpleText style={positionStyle} text="{props.positions}"/>
            </div>
            <div className="user-chart-info">
                {/* <img src={props.img}/> */}
                <SimpleText style={creditionalsStyle} text="{props.creditionals}"/>
            </div>
        </div>
    )
}

export default ChartElement
