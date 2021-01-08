import React, { useEffect } from 'react'
import './main.css'
import AOS from 'aos'
import "aos/dist/aos.css" 

function SkillPage() {

    useEffect(() => {
        AOS.init({
        });
    }, [])

    return (
        
        <div className="skill_flex">
            
            <div className="skill_header"> 
                <span>Level by </span><span style={{color:'#FE2E64'}}>Skill</span>
            </div>    
            <div className="bar_flex" data-aos="slide-left" data-aos-duration="1300">
                <div class="skill_name" id="skillName">JAVA</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv6</span>                
            </div>
           
            <div className="bar_flex" data-aos="slide-left" data-aos-duration="1500">
                <div class="skill_name">Spring</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv6</span>                
            </div>
            <div className="bar_flex" data-aos="slide-left" data-aos-duration="1700">
                <div class="skill_name">Jquery</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv7</span>                
            </div>

            <div className="bar_flex" data-aos="slide-left" data-aos-duration="1900">
                <div class="skill_name">Node.js</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv5</span>                
            </div>
            <div className="bar_flex" data-aos="slide-left" data-aos-duration="2100">
                <div class="skill_name">React</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv6</span>                
            </div>
            <div className="bar_flex" data-aos="slide-left" data-aos-duration="2400" >
                <div class="skill_name">JavaScript</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv5</span>                
            </div>
            <div className="bar_flex" data-aos="slide-left" data-aos-duration="2700">
                <div class="skill_name">Css</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv5</span>                
            </div>
            <div className="bar_flex" data-aos="slide-left" data-aos-duration="3000">
                <div class="skill_name">Database</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv6</span>                
            </div>
            

        </div>
    )
}

export default SkillPage
