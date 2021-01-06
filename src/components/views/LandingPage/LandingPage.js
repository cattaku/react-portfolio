import React, { useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom'; 
import "../LandingPage/main.css"
import  MainImage  from '../../../resources/images/1600_844.jpg'
import Typist from 'react-typist'
import NavBar from '../nav/NavBar'
import AboutPage from './AboutPage'
import Footer from '../footer/Footer';


function LandingPage() {

    const [typingDone, setTypingDone] = React.useState(false);

    return (
        <div>
            <NavBar/>

            <section className="main">
                <img className="mainImg" src={MainImage}/>
                <div  className="MyTypist">
                <Typist cursor={{ show: true, blink: true, element: '|', hideWhenDone: false, hideWhenDoneDelay: 1000}}
                avgTypingDelay={200} onTypingDone={() => setTypingDone(true)}>
                    
                    <ul className="typist">
                        <li className="hello">Hello,</li>
                        <li className="sooah">I'm Sooah,</li>
                        <li className="web">web developer.</li>     
                    </ul>
                </Typist>
                </div>
            </section>

            <div className="about-container" id="aboutContainer">
            <AboutPage/>
            </div>
            
            <div className="skill-container" id="skillContainer">
                <section>

                </section>
            </div>
            
            <div className="project-container" id="projectContainer">
                <section>

                </section>
            </div>
            <div className="project-container" id="projectContainer">
                <section>

                </section>
            </div>
            {/* 이력서 PDF로 받을 수 있게 올리기 */}
            <div>
                <Footer/>
            </div>
        </div>

    )
}

export default withRouter(LandingPage)