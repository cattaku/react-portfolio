import React from 'react'
import { GithubOutlined } from '@ant-design/icons'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_icon">
                
                <div className="email">
                    <span>cattaku0@gmail.com</span>
                </div>
                <div className="github">
                    <a href="https://github.com/cattaku" target="_blank">
                        <GithubOutlined style={{color:'#F2F2F2', fontSize:'3.5rem', lineWidth:'0.1rem'}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
