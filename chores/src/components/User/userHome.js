import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import { axiosWithAuth } from "../../auth/axiosAuth.js";

import WorkersList from './userWorkers/workersList';



function UserHome(props) {
    const [workers, setWorkers] = useState([]);

    useEffect( () => {

        axiosWithAuth().get("http://localhost:500/workers")
        .then(res => {
            setWorkers(res.data);
            console.log("get workers", res.data)
        }) 
        .catch (err => {
            console.log("get workers error", err.response);
        })
    }, []);         

     return (
        <div>
            
            <h1>User Home</h1>
               <WorkersList workers = {workers} />
            <Button onClick={() => props.history.push('/addperson')} className = "btn" size="lg">
                Add Person
            </Button>
        </div>
     )
  }
export default UserHome;