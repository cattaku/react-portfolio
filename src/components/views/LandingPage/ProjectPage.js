import React from 'react'
import MovieApp from '../../../resources/images/movie-app.PNG'
import Cgv from '../../../resources/images/cgv.png'
import Fewm from '../../../resources/images/fewm.png'


function ProjectPage() {
    return (
        
        <div className="project-flex"> 
            <div className="project-header">
                <span style={{color:'#FE2E64'}}>P</span><span>rojects</span>
            </div>

            <div className="project-flex-row">
                <div className="project-image">
                    <img src={MovieApp} style={{width:'280px', height:'200px'}}></img>
                </div>
                <div className="project-content">
                    <p style={{fontSize:'1.5rem', fontWeight:'bold',color:'#01DFD7'}}>React Movie App</p>
                    <span>
                        개발기간 : 2020.12.23 ~ 2021년 1월 3일
                        movieDB API를 이용하여 Reactjs + Redex + Nodejs + Express + MongDB와 연동하여 구현함
                        현재까지 로그인, 최신 tv 리스트, 영화리스트, 검색, 좋아요 기능이 구현되어 있음.
                    </span>
                    <p>
                        <a href="https://github.com/cattaku/node-movie-app" alt="react movieApp" target="_blank">
                            https://github.com/cattaku/node-movie-app
                        </a>
                    </p>
                </div>
            </div>

            <div className="project-flex-row">
                <div className="project-image">
                    <img src={Cgv} style={{width:'280px', height:'190px'}}></img>
                </div>
                <div className="project-content">
                    <p style={{fontSize:'1.5rem', fontWeight:'bold',color:'#01DFD7'}}>CGV미소지기 앱</p>
                    <span>
                        개발기간 : 2020.2 ~ 2020년 4월
                        cgv 모바일 통합관리시스템 개발 3차<br/>
                        정직원 및 미소지기 근퇴관리, 스케줄관리 모바일 앱개발<br/>
                        spring framework 2 + java 1.6 + jsp + jquery + oracle + MSSQL + svn형상관리 + Jira   
                    </span>
                </div>
            </div>

            <div className="project-flex-row">
                <div className="project-image">
                    <img src={Fewm} style={{width:'280px', height:'190px'}}></img>
                </div>
                <div className="project-content">
                    <p style={{fontSize:'1.5rem', fontWeight:'bold',color:'#01DFD7'}}>Fewm 물류 및 생산관리 시스템</p>
                    <span>
                        개발기간 : 2019.10 ~ 2020년 1월
                        주식회사 퓨엠 물류 및 생산관리 시스템 구축
                        spring framework 4.3 + java 1.7 + jsp + jquery + MS_SQL + svn형상관리   
                    </span>
                </div>
            </div>


            
        </div>
    )
}

export default ProjectPage
