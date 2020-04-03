import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SignIn(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

         return (
            <div className = 'signup'>
                <Form>
                <FormGroup>
                    <Label for="username">Username {username || ''}</Label>
                    <Input onChange = {e => {
                        setUsername(e.target.value)
                    }}
                    type="username"
                    name="username"
                    id="username"
                    placeholder="create a username"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email {email || ''}</Label>
                    <Input onChange = { e => {
                        setEmail(e.target.value)
                    }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="add your email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password {password || ''}</Label>
                    <Input onChange = {e => {
                        setPassword(e.target.value)
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="create a password"
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="phone">Phone Number {phone || ''}</Label>
                    <Input onChange = {e => {
                        setPhone(e.target.value)
                    }}
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="enter your phone number"
                    />
                </FormGroup>
                
                </Form>
                <Link to = '/signin'>
                    SIGN IN
                </Link>
    </div>
  );
}
