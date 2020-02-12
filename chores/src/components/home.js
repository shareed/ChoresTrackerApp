import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';




export default function Home(props) {
    return (
        <div className = "home">
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
