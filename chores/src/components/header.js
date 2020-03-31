import React from 'react'
import art from '../assets/bgimg.png';
export default function Header() {
    return (
        <div classNmae = 'header-container'>
            <div className = "header">
                <h1 className = "title">CHORES TRACKER</h1>
            </div>
            <div className = 'bgimg'>
                <img  src = {art}  alt = 'pic'/>
            </div>
        </div>
    )
}
