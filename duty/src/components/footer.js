import React from 'react'
import homeimg from '../assets/home.jpg';



export default function Footer() {
    return (
        <div className = 'footer-container'>
            <div >
                <img className = 'footer-bgimg' src = {homeimg}  alt = 'pic'/>
            </div>

        </div>
    )
}