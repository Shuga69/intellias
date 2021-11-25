import React from 'react'
import ChartElement from '../../../components/orgChart/chartElement/ChartElement'
import image from '../../../assets/oleh.jpg'
import './OrganizationChart.css'
import dotsImage from '../../../assets/dotsImage.svg'
import {userImages} from './imagesImport'
import NavbarTeamPage from '../../../components/teamPage/NavbarTeamPage'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const OrganizationChart = () => {
    return (
        <TransformWrapper
            defaultScale={5}
            defaultPositionX={200}
            wheel={{step:0.08}}
            defaultPositionY={100}>

        <div className="org-chart-section">
        <div className="container">
        <NavbarTeamPage/>
            <TransformComponent>

    <div className="org-wrapper">

        <div className="level-1">
        <ChartElement left="349px" header="senior" position="Senior Delivery Director" img={userImages.user1} creditionals="Roman Reznikov"/>
        </div>
        <div className="level-2">
        <ChartElement left="100px" header="delivery-yellow" position="Delivery Director" img={userImages.user2} creditionals="Yuriy Nykon"/>
        <ChartElement left="225px" header="delivery-yellow" position="Delivery Director" img={userImages.user3} creditionals="Oleh Piskozub"/>
        <ChartElement left="405px" header="delivery-yellow" position="Delivery Director" img={userImages.user4} creditionals="Vitaliy Horban"/>
        <ChartElement left="439px" header="delivery-yellow" position="Delivery Director" img={userImages.user5} creditionals="Oleksandr Vasylkov"/>
        <ChartElement left="485px" header="delivery-yellow" position="Delivery Director" img={userImages.user6} creditionals="Dmytro Lennyi"/>
        </div>
        <div className="level-3">
        <ChartElement left="25px" header="senior" position="Senior Delivery Manager" img={userImages.user7} creditionals="Andriy Vdovychyn"/>
        <ChartElement left="225px" header="senior" position="Senior Delivery Manager" img={userImages.user8} creditionals="Oleksii Vashchenko"/>
        <ChartElement left="405px" header="senior" position="Senior Delivery Manager" img={userImages.user9} creditionals="Andrii Basarab"/>
        <ChartElement left="439px" header="senior" position="Senior Delivery Manager" img={userImages.user10} creditionals="Yuriy Oliynyk"/>
        <ChartElement left="485px" header="senior" position="Senior Delivery Manager" img={userImages.user11} creditionals="Volodymyr Demkiv"/>
        </div>
        <div className="level-4">
        <ChartElement left="25px" header="delivery-blue" position="Delivery Manager" img={userImages.user12} creditionals="Andriy Glova"/>
        <ChartElement left="50px" header="delivery-blue" position="Delivery Manager" img={userImages.user13} creditionals="Inessa Chadiuk"/>
        <ChartElement left="240px" header="delivery-blue" position="Delivery Manager" img={userImages.user14} creditionals="Volodymyr Mykhailyshchuk"/>
        <ChartElement left="439px" header="senior" position="Senior Delivery Manager" img={userImages.user15} creditionals="Volodymyr Skrypka"/>
        <ChartElement left="485px" header="delivery-blue" position="Delivery Manager" img={userImages.user16} creditionals="Maksym Logvynenko"/>
        </div>
        <div className="level-5">
        <ChartElement left="25px" header="delivery-blue" position="Delivery Manager" img={userImages.user17} creditionals="Volodymyr Korbyak"/>
        <ChartElement left="50px" header="delivery-yellow" position="Delivery Coordinator" img={userImages.user18} creditionals="Pavlo Kononchuk"/>
        <ChartElement left="98px" header="delivery-blue" position="Senior Delivery Manager" img={userImages.user19} creditionals="Borys Kalenyk"/>
        <ChartElement left="110px" header="delivery-blue" position="Delivery Manager" img={userImages.user20} creditionals="Dmytro Yurchenko"/>
        <ChartElement left="315px" header="delivery-blue" position="Delivery Manager" img={userImages.user21} creditionals="Vitalii Berdii"/>
        <ChartElement left="360px" header="delivery-blue" position="Delivery Manager" img={userImages.user22} creditionals="Maksym Shakhid"/>
        </div>
        <div className="level-6">
        <ChartElement left="25px" header="delivery-blue" position="Delivery Manager" img={userImages.user23} creditionals="Artem Barsukov"/>
        <ChartElement left="50px" header="delivery-blue" position="Delivery Manager" img={userImages.user24} creditionals="Ihor Pasternak"/>
        <ChartElement left="98px" header="delivery-yellow" position="Delivery Coordinator" img={userImages.user25} creditionals="Maksym Koriukovets"/>
        <ChartElement left="110px" header="delivery-yellow" position="Delivery Coordinator" img={userImages.user26} creditionals="Mariia Abriutina"/>
        <ChartElement left="315px" header="senior" position="Senior Delivery Manager" img={userImages.user27} creditionals="Ivan Dyachyshyn"/>
        </div>
        <div className="level-7">
        <ChartElement left="25px" header="delivery-yellow" position="Delivery Coordinator" img={userImages.user28} creditionals="Petro Opatskyi"/>
        <ChartElement left="50px" header="delivery-blue" position="Delivery Manager" img={userImages.user29} creditionals="Philip Zoloto"/>
        <ChartElement left="98px" header="delivery-blue" position="Delivery Manager" img={userImages.user30} creditionals="Oleg Annin"/>
        <ChartElement left="110px" header="delivery-blue" position="Delivery Manager" img={userImages.user31} creditionals="Vadym Sekret"/>
        <ChartElement left="300px" header="delivery-yellow" position="Delivery Coordinator" img={userImages.user32} creditionals="Nataliia Sharudina"/>
        </div>
        <div className="level-8">
        <ChartElement left="175px" header="delivery-yellow" position="Delivery Coordinator" img={userImages.user33} creditionals="Tetiana Lytvynenko"/>
        <ChartElement left="225px" header="delivery-yellow" position="Delivery Coordinator" img={userImages.user34} creditionals="Oksana Cherkeziia"/>
        </div>
        <div className="level-9">
        <ChartElement header="delivery-blue" position="Delivery Manager" img={userImages.user35} creditionals="Alina Piddubna"/>
        <ChartElement  header="delivery-blue" position="Delivery Manager" img={userImages.user36} creditionals="Yurii Shpak"/>
        <ChartElement  header="senior" position="Scrum Master" img={userImages.user37} creditionals="Volodymyr Yakubovych"/>
        </div>
        <img className="dots-image" src={dotsImage}/>

    </div>
        </TransformComponent>
    </div>
    </div>
        </TransformWrapper>
    )
}

export default OrganizationChart
