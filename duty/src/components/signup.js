import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import '../css/signup.css';

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

    } 

    const onInputChange = e => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        }); 
    };
    
         return (
            <div className = 'signup'>
                <Form onSubmit = {onSubmitHandler}>
                <FormGroup className = 'set'>
                    <Label for="username">Username {formData.username || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="username"
                    name="username"
                    id="username"
                    placeholder="create a username"
                    />
                </FormGroup>
                <FormGroup className = 'set'>
                    <Label for="email">Email {formData.email || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="add your email"
                    />
                </FormGroup>
                <FormGroup className = 'set'>
                    <Label for="password">Password {formData.password || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="create a password"
                    />
                </FormGroup>
                
                <FormGroup className = 'set'>
                    <Label for="phone">Phone Number {formData.phone || ''}</Label>
                    <Input onChange = {onInputChange}
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="enter your phone number"
                    />
                </FormGroup>
                <div className = "button">
                <Button>Submit</Button>
                </div>
                </Form>
                <Link to = '/signin' >
                {/* <Link to = '/signin'> */}
                    Want to sign in? Click here 
                </Link>
    </div>
  );
}
