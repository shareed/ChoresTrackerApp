import React from 'react';
import User from './user';


const UserList = props => {
  return (
    <div>
      {props.users.map(user => (
        <User
          handleToggleComplete={props.handleToggleComplete}
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
 };



export default UserList;
