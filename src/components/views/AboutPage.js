import React from 'react'
import { withRouter } from 'react-router-dom'; 
import "./main.css"
import Typist from 'react-typist'


function AboutPage() {

    const [typingDone, setTypingDone] = React.useState(false);

    return (
        <div className="about-container">
            <section class="section2">
            <article class="arti1">
            <Typist cursor={{ show: true, blink: true, hideWhenDone: false, hideWhenDoneDelay: 1000,}}
                avgTypingDelay={200} onTypingDone={() => setTypingDone(true)}>
                <p><span style={{color:'#FE2E64', fontWeight:'bold'}}>A</span>bout me</p>
            </Typist>
            </article>
            
            <article class="arti2">
                <p>개인 사업을 하면서 웹사이트 개발에 관심을 갖게 되었고, 2019년 1월에 운영하던 사업체를 정리하면서 지금이 아니면 원하는 공부를 
                    할 수 없을 것 같아 프로그래밍 공부를 시작하게 되었습니다. 프로그래밍의 시작은 JAVA로 시작했지만 퇴사 후에 코딩테스트를 준비하면서 
                    javaScript를 가까이 하게 되었고, javaScript와 Node에 관심을 갖게 되어 지금은 Nodejs와 React, Redux 를 공부하고 있습니다.
                    늦게만큼 열심히 노력해서 오래도록 현업에서 일을 할 수 있는 개발자로 남고 싶습니다.
                </p> 
            </article>
            </section>
            
        </div>
    )
}

export default withRouter (AboutPage)
