import React from 'react'
import SimpleText from '../../../simpleText/SimpleText'
import cardIcon from '../../../../assets/cardIcon.svg'
import './IntelliasUpdatesCard.css'
const IntelliasUpdatesCard = (props) => {
    return (
        <article className="intellias-updates-card-body">
            <img width={props.widthImg} height={props.heightImg} src={props.image}/>
            <div className="card-text-section">
                <h6 className="card-title">{props.title}</h6>
                <div className="card-date">
                <img width="16px" height="16px" src={cardIcon}/>
                <SimpleText text={props.date}/>
                </div>
            </div>
        </article>
    )
}

export default IntelliasUpdatesCard
