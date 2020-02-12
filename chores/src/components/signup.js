import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SignIn(props) {


         return (
            <div className = 'signup'>
                <Link to = '/'>
                    HOME
                </Link>
                <Link to = '/signin'>
                    SIGN IN
                </Link>
                <Form>
                <FormGroup>
                    <Label for="exampleEmail">Plain Text (Static)</Label>
                    <Input plaintext value="Some plain text/ static value" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">Url</Label>
                    <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="url placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">Number</Label>
                    <Input
                    type="number"
                    name="number"
                    id="exampleNumber"
                    placeholder="number placeholder"
                    />
                </FormGroup>
                
                </Form>
    </div>
  );
}
