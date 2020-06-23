import React from 'react'
import { Button } from 'reactstrap';

import '../css/home.css';


export default function Home(props) {
    return (
        <div className = "home">
            <div className = "app_info">
                {/* <div className = 'icons'>
                    <i class="fa fa-tasks top" aria-hidden="true"></i>
                    <i class="fa fa-bell top"></i>
                    <i class="fa fa-check-square-o top"></i>
                    <i class="fa fa-money top"></i>
                </div> */}
                <div className = ''>
                    <div className = 'text-div'>
                        <p><i className="fa fa-tasks side"></i></p>
                        <p className = 'text'>Create, Track And Assign Tasks</p>
                    </div>

                    <div className = 'text-div'>
                        <p><i class="fa fa-bell side"></i></p>
                        <p className = 'text'>Set Up And Send Reminders</p>
                    </div>
                    <div className = 'text-div'>
                        <p><i class="fa fa-check-square-o side"></i></p>
                        <p className = 'text'>Set Up And Send Notification</p>
                    </div>

                    <div className = 'text-div'>
                        <p><i class="fa fa-money side"></i></p>
                        <p className = 'text'>Reward with safe secure transfers. </p>
                    </div>
                </div>
            </div>
            <div className = "btns">
            
            <Button onClick={() => props.history.push('/whichsignup')} className = "btn" size="lg">
                SIGN UP
            </Button>
            
            <Button onClick={() => props.history.push('/signin')} className = "btn" size="lg">
                SIGN IN
                </Button>
            
            </div>

        </div>
    )
}
