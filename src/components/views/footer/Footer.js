import React from 'react'
import { GithubOutlined } from '@ant-design/icons'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <ul className="footer_icon">
                <li>
                    <a href="https://github.com/cattaku">
                        <GithubOutlined style={{color:'#F2F2F2', fontSize:'3.5rem', lineWidth:'0.1rem'}}/>
                    </a>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Footer
