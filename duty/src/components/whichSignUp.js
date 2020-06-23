import React from 'react'
import { Button } from 'reactstrap';

import '../css/home.css';
import '../css/whichsignup.css';

export default function WhichSignUp(props) {
    return (
            <div className = "which">
                <div className = "eachwhich">
                    <p>
                        Do you want to assign task to other users?
                    </p>
                    <div className = "which-btns">
                    <Button onClick={() => props.history.push('/signup')} className = "btn" size="lg">
                        ASSIGNER
                    </Button>
                    </div>
                </div>
                <div className = "eachwhich">
                    <p>
                    Do you want to accept tasks from other users?
                    </p>
                    <div className = "which-btns">
                    <Button onClick={() => props.history.push('/signup')} className = "btn" size="lg">
                    ASSIGNEE
                    </Button>
                    </div>
                </div>
                
            </div>
    )
}
