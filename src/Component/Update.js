import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'
function Update() {
    return (
        <div className="container   ">
        <h1>Update Article</h1>
        <Form>
            <Form.Group controlId="formGroupEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="email" placeholder="Update Title" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="password" placeholder="Update description" />
            </Form.Group>
        </Form>
        <Button variant="dark">Save</Button>{' '}
        </div>
    )
}

export default Update
