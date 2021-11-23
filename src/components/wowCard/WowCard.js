import React,{useState} from 'react'
import plusIcon from "../../assets/wowPlusIcon.svg"
import minusIcon from '../../assets/minusIcon.svg'
import SimpleText from '../simpleText/SimpleText'
import './WowCard.css'

const WowCard = (props) => {
    const [isShow, setIsShow] = useState(false);
    const cardTextStyle = {
        fontWeight:700,
        fontSize: 16,
        width: "100%",
        marginLeft:58
    }
   const onButtonClickHandler =()=>{
        setIsShow(!isShow);
    }
    return (
        <>
        <div className="wow-card__inner">
        <p style={isShow?{color:"#CEF4EB"}:{color:"#EDFDF9"}} className="wow-card-number">{props.number}</p>
        <div className="wow-card-text-section">
            <div className="wow-card-text__inner">
                <button onClick={onButtonClickHandler} className="load-text-btn"><img width="18px" height="18px" src={isShow?minusIcon:plusIcon}/></button>
                <SimpleText style={cardTextStyle} text={props.text}/>
                
            </div>
            {isShow&&<p className="additional-text">The engineers' availability is flexible. Usually, it is a typical working day: 10 am – 7 pm in GMT +3. The schedule can be  adjusted to clients' time zone and preferences to ensure that both clients' and Intellias teams have at least 3 hours of overlap for daily meetings (e.g., for PDT time zone)
The primary contact point for the client during the initial communication is a sales representative (SR). Then, SR transfers the responsibilities to an account manager (AM) responsible for developing the relationships with a client or a delivery manager acting as AM
The billing process for working hours of the current month starts at the beginning of the following month. Intellias delivery manager sends reported hours for the client's approval. If there are no objections, the Intellias Finance team submits the invoice approximately on the 10th day of the following month.
In case of any objections and constraints regarding the reported hours, we can schedule the meeting between a client and Intellias delivery manager, where both parties can reach an agreement</p>}
        </div>
        
        </div>
        
        </>
    )
}

export default WowCard
