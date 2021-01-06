
import { Menu } from 'antd'
import { HomeOutlined, 
         MailOutlined,   
         UserOutlined, 
         SettingOutlined, 
         ProjectOutlined } from '@ant-design/icons'


function NavBar() {

    return (

        <nav className="menu">
            <div className="menu_container">
                <ul>
                    <li>
                        <a href="/">
                            <HomeOutlined style={{color:'#01DFD7', fontSize:'1.5rem', lineWidth:'0.1rem'}}/>
                        </a>
                    </li>
                    <li> 
                        <a href="/about">
                            <UserOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                    </a>
                    </li>
                    <li>
                        <a href="/">
                            <SettingOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ProjectOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <MailOutlined style={{color:'#01DFD7', fontSize:'1.5rem'}}/>
                         </a>
                    </li>            
                </ul>

            </div>
        </nav>
    )
}

export default NavBar
