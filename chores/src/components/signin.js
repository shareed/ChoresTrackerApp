import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function SignIn(props) {


     return (
         <div className = "signin">
        <div >
            <Link to = '/'>
                HOME
            </Link>
            
            <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
            <Button>Submit</Button>
            <p>Dont Have an account? <Link to = '/signup'>
                SIGN UP
            </Link></p>
            </Form>
        </div>
        </div>
     )
  }
