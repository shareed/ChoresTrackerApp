import React from 'react'
import { Button } from 'reactstrap';

import '../css/home.css';


export default function WhichSignUp(props) {
    return (
            <div className = "btns">
                <div>
                    <p>
                        Do you want to assign task to other users?
                    </p>
                    <Button onClick={() => props.history.push('/signup')} className = "btn" size="lg">
                        ASSIGNER
                    </Button>
                </div>
                <div>
                    <p>
                    Do you want to accept tasks from other users?
                    </p>
                    <Button onClick={() => props.history.push('/signup')} className = "btn" size="lg">
                    ASSIGNEE
                    </Button>
                </div>
                
            </div>
    )
}
