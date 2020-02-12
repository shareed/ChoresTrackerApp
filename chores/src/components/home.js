import React from 'react'
import { Button } from 'reactstrap';


export default function Home() {
    return (
        <div className = "home">
            <div className = "header">
                <h1 className = "title">CHORES TRACKER</h1>
            </div>
            <div className = "btns">
            <Button className = "btn" size="lg">SIGN UP</Button>
            <Button className = "btn" size="lg">SIGN IN</Button>
            </div>

        </div>
    )
}
