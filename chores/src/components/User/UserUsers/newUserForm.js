import React, { useState } from 'react';

const NewUserForm = ( { addUser }) => {

  const [value, setValue] = useState( '' );

  const onFormSubmit = (e) => {
    e.preventDefault()

    if(! value ) return;
//name is equal to value and choresDone is equal to false
    addUser (value);

  }

  const handleOnChange = (e) => {
    setValue(e.target.value);
  }

    return (
      <form onSubmit = {onFormSubmit}>

        <label>
          Add New User:
        </label>
        <input className = 'input'
          type="text"
          name="user"
          placeholder="Enter a new user"
          value= {value}
          onChange={handleOnChange}
        />
       
      </form>
    );
   };
   
   export default NewUserForm;
  