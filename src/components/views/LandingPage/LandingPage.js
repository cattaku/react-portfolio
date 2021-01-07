import React, { useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom'; 
import "../LandingPage/main.css"
import  MainImage  from '../../../resources/images/1600_844.jpg'
import Typist from 'react-typist'
import NavBar from '../nav/NavBar'
import AboutPage from './AboutPage'
import Footer from '../footer/Footer';
import SkillPage from './SkillPage';
import ProjectPage  from './ProjectPage'


function LandingPage() {

    const [typingDone, setTypingDone] = React.useState(false);

    return (
        <div>
            <header>
            <NavBar/>
            </header>
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
                <SkillPage/>   
            </div>
            
            <div className="project-container" id="projectContainer">
                <ProjectPage/>
            </div>
            
        </div>

    )
}

export default withRouter(LandingPage)