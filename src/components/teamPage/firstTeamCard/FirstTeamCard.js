import React,{useState} from 'react'
import Button from '../../button/Button'
import SimpleText from '../../simpleText/SimpleText'
import ModalDetails from '../modalDetails/ModalDetails'
import './FirstTeamCard.css'
import modalUser from '../../../assets/modalUser.jpg'
import mapPin from '../../../assets/MapPin.svg'
const FirstTeamCard = (props) => {
    const[showDetails, setShowDetails] = useState(false);
   const titleStyle = {
    fontSize: 16,
    color: "#9CA7B0",
   }
   const textStyle = {
    fontSize: 20,
    fontWeight:700,
    color: "#64727D",
   }
    const btnStyle={
        width:165,
        height:44,
        marginTop:8
    }
    const positionStyle={
        fontSize: 10,
       
    }
    const moreInfoStyles={
        fontSize: 14,
        color: "#000000",
        
    }
   const showModal = () => {
       setShowDetails(true);
    };

   const hideModal = () => {
       
        setShowDetails(false);
   
    };
    
    return (
        <div>
            <div className="worker-card">
            <img className="dev-img" width="129px" height="129px" src={props.img}/>
            <h6 className="worker-name">{props.name}</h6>
            <SimpleText style={positionStyle} text={props.position}/>
            <Button onClick={showModal} style={btnStyle} type="white" text="View details"/>
            <Button style={btnStyle} type="greenBtn" text="Give feedback"/>
            </div>
            <ModalDetails show={showDetails} handleClose={hideModal}>
                <div className="details-container">
                    <img src={modalUser}/>
                    <div className="details__inner">
                    <div className="text-information">
                        <div className="worker-information">
                            <SimpleText style={titleStyle} text="Name"/>
                            <SimpleText style={textStyle} text="Wade Warren"/>
                        </div>
                        <div className="worker-information right">
                            <SimpleText style={titleStyle} text="Email Adress"/>
                            <SimpleText style={textStyle} text="example@gmail.com"/>
                        </div>
                        <div className="worker-information">
                            <SimpleText style={titleStyle} text="Position"/>
                            <SimpleText style={textStyle} text="Delivery Manager"/>
                        </div>
                        <div className="worker-information right">
                            <SimpleText style={titleStyle} text="Phone Number"/>
                            <SimpleText style={textStyle} text="+38 (0__)"/>
                        </div>
                        
                        </div>
                        <div className="worker-location">
                            <img src={mapPin}/>
                            <SimpleText text="Lviv"/>
                        </div>
                        <SimpleText style={moreInfoStyles} text="The engineers' availability is flexible. Usually, it is a typical working day: 10 am – 7 pm in GMT +3. The schedule can be  adjusted to clients' time zone and preferences to ensure that both clients' and Intellias teams have at least 3 hours of overlap for daily meetings (e.g., for PDT time zone"/>
                        </div>
                </div>
            </ModalDetails>
        </div>
    )
}

export default FirstTeamCard
