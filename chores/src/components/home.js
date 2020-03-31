import React from 'react'
import { Button } from 'reactstrap';




export default function Home(props) {
    return (
        <div className = "home">
            <div className = "app_info">
                <div className = 'icons'>
                <i class="fa fa-bell top"></i>
                <i class="fa fa-check-square-o top"></i>
                <i class="fa fa-money top"></i>
                </div>
                <div className = 'text'>
                <p><i class="fa fa-bell side"></i>Remind you kids about their chores </p>
                <p><i class="fa fa-check-square-o side"></i>Set Reminders and Track progress. </p>
                <p><i class="fa fa-money side"></i>Reward with safe secure transfers. </p>
                </div>
            </div>
            <div className = "btns">
            
            <Button onClick={() => props.history.push('/signup')} className = "btn" size="lg">
                SIGN UP
            </Button>
            
            <Button onClick={() => props.history.push('/signin')} className = "btn" size="lg">
                SIGN IN
                </Button>
            
            </div>

        </div>
    )
}
