import React from 'react'
import './main.css'

function SkillPage() {

    return (
        
        <div className="skill_flex">
            <div className="skill_header"> 
                <span>Level by </span><span style={{color:'#FE2E64'}}>Skill</span>
            </div>    
            <div className="bar_flex" >
                <div class="skill_name" id="skillName">JAVA</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv6</span>                
            </div>
            <div className="bar_flex" >
                <div class="skill_name">Spring</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv6</span>                
            </div>
            <div className="bar_flex" >
                <div class="skill_name">Jquery</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv7</span>                
            </div>

            <div className="bar_flex" >
                <div class="skill_name">Node.js</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv5</span>                
            </div>
            <div className="bar_flex" >
                <div class="skill_name">React</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv6</span>                
            </div>
            <div className="bar_flex" >
                <div class="skill_name">JavaScript</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv5</span>                
            </div>
            <div className="bar_flex" >
                <div class="skill_name">Css</div>
                <div className="bar_fill">
                    <div></div><div></div><div></div><div></div><div></div>
                    <div class="skill_level"></div><div class="skill_level"></div><div class="skill_level"></div>
                    <div class="skill_level"></div><div class="skill_level"></div>
                </div>
                <span className="level">Lv5</span>                
            </div>
            <div className="bar_flex" >
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
