import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

export default function SignUp(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: ''
    });
    


    const onSubmitHandler = e => {
        
        e.preventDefault();
        alert(`sending: UserName: ${formData.username}, Email: ${formData.email}, Password: ${formData.phone}`)
        // console.log(user.name);
        // console.log(user.password);

    } 
    const onInputChange = e => {
        //set a new state, an object
        setFormData({
            ...formData,

            //used to get the dynamic name property, and the value of that property 
            [e.target.name]: e.target.value,
        }); 
    //  debugger
    };
    
    


         return (
            <div className = 'signup'>
                <Form onSubmit = {onSubmitHandler}>
                <FormGroup>
                    <Label for="username">Username {formData.username || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="username"
                    name="username"
                    id="username"
                    placeholder="create a username"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email {formData.email || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="add your email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password {formData.password || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="create a password"
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="phone">Phone Number {formData.phone || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="enter your phone number"
                    />
                </FormGroup>
                <Button>Submit</Button>
                </Form>
                <Link >
                {/* <Link to = '/signin'> */}
                    SIGN IN
                </Link>
    </div>
  );
}
