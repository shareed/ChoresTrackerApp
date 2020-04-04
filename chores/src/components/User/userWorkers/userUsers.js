import React, {useState} from 'react';
import User from './user';
import NewUserForm from './newUserForm';

function UserUser() {
  const initialState = [
    {
         name: 'Shakeya',
         id: 1,
         choresDone: false
       },
       {
         name: 'Keith',
         id: 2,
         choresDone: false
       },
       {
         name:'Keon',
         id: 3,
         choresDone: false
       }
  ]
  // const resultArray =  useState(initialState)
  // const users = resultArray[0];
  // const setUsers = resultArray[1];
// ↕   ↕   ↕   ↕   ↕   ↕ Does the same thing
  const [users, setUsers] = useState( initialState ); //Hook, destructuring

  const addUser = ( name ) => {
    const newUser = [ ...users, { name: name, choresDone: false }]; //name:name is the property name and valuw and since they are the same we can just use name
      setUsers( newUser )
  }

  const handleUserClick = (index) => {
    //Get all users from state
    const newUsers = [...users];
    //set choresDone property to the reverse of the current value
    newUsers[index].choresDone = ! newUsers[index].choresDone;
    setUsers(newUsers);
  }

  const handleRemoveClick = (index) => {
    //Get all users from state
    const newUsers = [...users];
    //Remove the clicked item
    newUsers.splice(index, 1);
    //Set state with the new array of users, with the udated value
    setUsers(newUsers)
  }

     return (
        <div>
          <NewUserForm addUser = { addUser }/>
    {/* Check if there are any users if there are users give me those users if not return nothing */}
          {users.length ? (
            users.map((user, index) => (
              <User handleRemoveClick = {handleRemoveClick} handleUserClick = { handleUserClick }
              key = { user.id }
              user = { user }
              index = { index }
              />
            ) )
          ) : ''}  
        </div>
     )
  }
export default UserUser;
