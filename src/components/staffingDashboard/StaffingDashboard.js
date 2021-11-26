import React from 'react'
import Title from '../title/Title'
import staffing1 from '../../assets/staffing1.jpg'
import staffing2 from '../../assets/staffing2.jpg'
import'./StaffingDashboard.css'
const StaffingDashboard = (props) => {
   return(
        <div className="staffing-section">
            <div className="container"> 
            <Title text="StaffingDashboard"/>
            <div className="staffing__inner">
                <img className="left-staffing-img" alt="staffing" src={staffing1}/>
                <img className="right-staffing-img" alt="staffing" src={staffing2}/>
            </div>
        </div>
        </div>
     
    )
}

export default StaffingDashboard
