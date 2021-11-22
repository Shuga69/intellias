import React from 'react'
import Title from '../../title/Title'
import './IntelliasUpdates.css'
import cardImage1 from '../../../assets/card1.jpg'
import cardImage2 from '../../../assets/card2.jpg'
import cardImage3 from '../../../assets/card3.jpg'
import cardImage4 from '../../../assets/card4.jpg'
import cardImage5 from '../../../assets/card5.jpg'
import cardImage6 from '../../../assets/card6.jpg'
import IntelliasUpdatesCard from './intelliasUpdatesCard/IntelliasUpdatesCard'
const IntelliasUpdates = (props) => {
    return (
        <div className="intellias-updates__inner">
            <div className="intellias-updates-text-section">
                <Title text={props.title}/>
                <div className="intellias-cards-section">
                    <div className="intellias-cards-section-top">
                <IntelliasUpdatesCard 
                title="Nunc massa fermentum erat metus. Cum in sit hendrerit in mus." 
                date="06-07-2021"
                image={cardImage1} widthImg="359px" heightImg="160px"/>
                 <IntelliasUpdatesCard 
                title="Donec sagittis ut turpis turpis nulla scelerisque tortor donec quis. Etiam." 
                date="22-15-2021"
                image={cardImage2} widthImg="359px" heightImg="260px"/>
                <IntelliasUpdatesCard 
                title="Tempor semper laoreet risus odio volutpat tortor. Malesuada." 
                date="06-03-2021"
                image={cardImage3} widthImg="359px" heightImg="160px"/>
                </div>
                <div className="intellias-cards-section-bottom">
<IntelliasUpdatesCard 
                title="Adipiscing posuere nulla volutpat nec volutpat. Ornare eget eu sed." 
                date="08-12-2020"
                image={cardImage4} widthImg="359px" heightImg="260px"/>
<IntelliasUpdatesCard 
                title="At ut vitae rhoncus pharetra. Augue nulla nunc purus viverra sem." 
                date="02-08-2020"
                image={cardImage5} widthImg="359px" heightImg="160px"/>
<IntelliasUpdatesCard 
                title="Sit massa enim sit cras. Consectetur aliquet pretium quis tellus." 
                date="23-03-2020"
                image={cardImage6} widthImg="359px" heightImg="260px"/>
            </div>  
           </div>
            </div>
        </div>
    )
}

export default IntelliasUpdates
