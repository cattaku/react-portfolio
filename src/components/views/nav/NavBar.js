import { HomeOutlined, 
         GithubOutlined,   
         UserOutlined, 
         SettingOutlined, 
         ProjectOutlined,
         MailOutlined } from '@ant-design/icons'

import './nav.css'

function NavBar() {

    return (
        <nav className="menu_container">
            
                <ul>
                    <li>
                        <a href="/react-portfolio">
                            <HomeOutlined style={{color:'#01DFD7', fontSize:'1.5rem', lineWidth:'0.1rem'}}/>
                        </a>
                    </li>
                    <li> 
                        <a href="#aboutContainer">
                            <UserOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                    </a>
                    </li>
                    <li>
                        <a href="#skillContainer">
                            <SettingOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                        </a>
                    </li>
                    <li>
                        <a href="#projectContainer">
                            <ProjectOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                        </a>
                    </li>
                    <li>
                        <a href="#footer">
                            <MailOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                         </a>
                    </li>            
                </ul>
            
            </nav>

    )
}

export default NavBar
