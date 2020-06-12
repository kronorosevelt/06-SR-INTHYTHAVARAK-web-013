import React, { Component } from 'react'
import Axios from 'axios';
import { Table,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Update from './Update';
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }
    componentWillMount() {
        Axios.get("http://110.74.194.124:15011/v1/api/articles?page=1&limit=15").then((res) => {
            this.setState({
                users: res.data.DATA,
            });
        });
    }
    handleDelete(id) {
        Axios.delete(`http://110.74.194.124:15011/v1/api/articles/${id}`).then((res)=>{
            this.componentWillMount()
            alert(res.data.MESSAGE)
        })
    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Article Management</h1>
                <div className="App">
                    <div className="container">
                        <Link to={ `/Add`}> 
                        <Button variant="dark">Add new article</Button>{' '}
                        </Link>
                    </div>
               <br></br>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TITLE</th>
                            <th>DESCRPTION</th>
                            <th>CHANGE DATE</th>
                            <th>IMAGE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) =>
                            <tr key= {user.ID}>
                                <td> {user.ID}</td>
                                <td> {user.TITLE}</td>
                                <td> {user.DESCRIPTION}</td>
                                <td> {user.CREATED_DATE}</td>
                                <td>
                                    <img width="110" src={user.IMAGE}/>
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                    <Link to={ `/View/${user.ID}`}>
                                    <button type="button" class="btn btn-primary">View</button>
                                    </Link>
                                    <Link to ={`/edit/${user.ID}`}>
                                    <button type="button" class="btn btn-warning">Update</button>
                                    </Link>
                                    <button type="button" class="btn btn-danger" onClick={()=>this.handleDelete(user.ID)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}