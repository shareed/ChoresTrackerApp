import React from 'react';
import { Button } from 'reactstrap';






function UserHome(props) {
     return (
        <div>
            
            <h1>User Home</h1>
            <Button onClick={() => props.history.push('/addperson')} className = "btn" size="lg">
                Add Person
            </Button>
        </div>
     )
  }
export default UserHome;