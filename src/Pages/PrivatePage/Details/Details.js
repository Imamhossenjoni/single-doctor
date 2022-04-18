import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Details.css'

const Details = () => {
    const [agree,setAgree]=useState(false);
    const handleAgree=()=>{
        setAgree(!agree);
    }

    const handleSubmit=e=>{
            alert('Hello! Sir/Mam. Thanks for your information. Now, you can take your service.Best wishes to you.Good Luck')
    }
    return (
        <div className='details'>
            <div className='details-tittle'>
                <h1 className='text-success text-center mt-3'>WelCome to My Service</h1>
                <p className='blue text-center'>You have to fill up all of the field before service</p>
            </div>
            <div>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Enter Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" placeholder="District" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tell me About Your problem</Form.Label>
                        <Form.Control type="text" placeholder="What is your problem" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter Your Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter Your Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Phone Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAgree} type="checkbox" label="Check me out" required />
                    </Form.Group>
                    <Button  disabled={!agree} variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Details;