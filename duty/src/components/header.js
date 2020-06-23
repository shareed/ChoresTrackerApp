import React from 'react'
import homeimg from '../assets/home.jpg';



export default function Header() {
    return (
        <div className = 'header-container'>

            <div className = "name-header">
                <h1 className = "title">DUTY</h1>
            </div>

            <div className = 'bgimg-div'>
                <img className = 'bgimg' src = {homeimg}  alt = 'pic'/>
            </div>

        </div>
    )
}
