import React from 'react'
import './MainPage.css'
import Button from '../../components/button/Button'
import GeneralInfo from '../../components/mainPage/generalInfo/GeneralInfo'
import mainImage from '../../assets/main-image.jpg'
import IntelliasUpdates from '../../components/mainPage/intelliasUpdates/IntelliasUpdates'
const MainPage = () => {
return (
        <section className="main-page-section">
            <div className="container">
                    <GeneralInfo image={mainImage} title="General Info" text={`Diam sit sed pellentesque porttitor at. Ultrices quisque risus, nisl, sed aliquam faucibus integer. Ornare facilisi morbi eget sagittis. Lorem dictum venenatis mi, diam aliquam justo sit. Nec convallis nisl nec, nulla risus amet diam suspendisse lacus. At nunc fringilla elementum orci. Faucibus vitae blandit laoreet egestas nulla arcu. Viverra id risus at elit risus tortor pharetra in.
                    Porttitor augue vitae congue eget interdum elit, ac. Bibendum nibh lectus ornare nulla natoque. Arcu est amet integer nunc in nec proin. Morbi in hendrerit gravida nec viverra ut. Elit velit, gravida dis vehicula purus sit risus, sed semper. Auctor magna elementum scelerisque vitae commodo tellus sit diam tristique. Nisi condimentum pellentesque ipsum mauris varius ut risus arcu. Amet ullamcorper nulla amet amet.`}/>
                <div className="feedback-btn-container">
                <Button type="greenBtn" text="Give Feedback"/>
                </div>
                <IntelliasUpdates title="Intellias Updates"/>
                <div className="feedback-btn-container">
                <Button type="white" text="Request Service"/>
                </div>
            </div>
        </section>
    )
}

export default MainPage
