import React from 'react';

function User ({user, index, handleRemoveClick, handleUserClick}) {

    return (
        <div>
            {/* if user choresDone is true add a strike through class otherwise don't */}
           <sapn className = {user.choresDone ? 'strike-through': ''} onClick = { () => handleUserClick(index)}>
               {user.name}
               </sapn> 
           <span onClick = { () => handleRemoveClick(index)}>X</span>
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

export default User;