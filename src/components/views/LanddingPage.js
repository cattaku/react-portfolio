import React, { useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom'; 
import "./main.css"
import  MainImage  from '../../resources/images/work-731198_1920.jpg'
import Typist from 'react-typist'

function LandingPage() {

    const [typingDone, setTypingDone] = React.useState(false);

    return (
        <div>
            {/* <header id="main_header">
            <nav id="nav">
                <ul>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Project</li>
                </ul>
            </nav>
            </header> */}

            <section className="main">
                <img className="mainImg" src={MainImage}/>
                <div  className="MyTypist">
                <Typist cursor={{ show: true, blink: true, element: '|', hideWhenDone: false, hideWhenDoneDelay: 1000,}}
                avgTypingDelay={200} onTypingDone={() => setTypingDone(true)}>
                    <ul className="typist">
                        <li className="hello">Hello,</li>
                        <li className="sooah">I'm Sooah,</li>
                        <li className="web">web developer.</li>     
                    </ul>
                </Typist>
                </div>
            </section>
        </div>

    )
}

export default withRouter(LandingPage)