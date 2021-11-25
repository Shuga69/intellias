import React from 'react'
import Title from '../../components/title/Title'
import WowCard from '../../components/wowCard/WowCard'
import './WowPage.css'
const WowPage = () => {
    return (
        <div className="wow-page-section">
            <div className="container">
                <Title text="WOW"/>
                <div className="wow-page__inner">
                    <WowCard number="01" text="What is the availbility of the engineers  in terms of hours they will work, and how much of that time can overlap with my local hours?"/>
                    <WowCard number="02" text="Do the engeers have any planned OOO time I should be aware of?"/>
                    <WowCard number="03" text="What is the availbility of the engineers  in terms of hours they will work, and how much of that time can overlap with my local hours?"/>
                    <WowCard number="04" text="Do the engeers have any planned OOO time I should be aware of?"/>
                    <WowCard number="05" text="What is the availbility of the engineers  in terms of hours they will work, and how much of that time can overlap with my local hours?"/>
                </div>
            </div>
        </div>
    )
}

export default WowPage
