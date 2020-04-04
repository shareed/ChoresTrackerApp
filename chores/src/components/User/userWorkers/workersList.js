import React from 'react';
import WorkerCard from './workerCard';;


const WorkerList = ({workers}) => {
  return (
    <div>
      {workers.map((worker, index) => (
        <WorkerCard
          // handleToggleComplete={props.handleToggleComplete}
          key={index}
          worker={worker}
        />
      ))}
    </div>
  )
 };



export default WorkerList;
