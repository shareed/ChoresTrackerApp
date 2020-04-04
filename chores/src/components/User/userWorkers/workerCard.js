import React from 'react';

function WorkerCard ({worker}) {

    return (
        <div>
            {worker.workername}
        </div>
    )

}


// const User = props => {
//     console.log(props)
  
//     return (
//         <div
//         //when the item is clicked draw a line through text
//      style={props.user.completed ? { 
//          textDecoration: 'line-through' } : null}
//      onClick={() => props.handleToggleComplete(props.user.id)}
//    >
//    {props.user.name}
//    </div>
//     )
// }

export default WorkerCard;