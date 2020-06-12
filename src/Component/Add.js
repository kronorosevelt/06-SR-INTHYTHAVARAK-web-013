import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios';
export default class Add extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            description:"",
            messageErr:"",   
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
            messageErr:false, 
        })
    }
    handleValidation=(event)=>{
        event.preventDefault();
        if(this.state.title=="" && this.state.description==""){
            this.setState({
                messageErr:true,
            })
            return;
        }
        else if(this.state.title==""){
            this.setState({
                messageErr:true
            })
        }
        else if(this.state.description==""){
            this.setState({
                messageErr:true
            })
        }
        let add={
            TITLE:this.state.title,
            DESCRIPTION: this.state.description
        }
        Axios.post("http://110.74.194.124:15011/v1/api/articles",add).then((res)=>{
            alert(res.data.MESSAGE)
        })
    };

 
    render() {
        return (
            <div className="container">
               <div className="row">
                    <div className="col-md-7">    
                        <Form onSubmit={this.handleSubmit} onValidate>
                            <Form.Group>
                                <Form.Label>TITLE</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter Title" value={this.state.title} value={this.state.title} onChange={(e)=>this.handleChange(e)}/>
                                <Form.Label style={{color:"red"}}>{this.state.messageErr?"*Title can not Empty":""}</Form.Label>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>DESCRIPTION</Form.Label>
                                <Form.Control type="text" name="description" placeholder="Enter Description" value={this.state.description} value={this.state.descripton}onChange={(e)=>this.handleChange(e)} />
                                <Form.Label style={{color:"red"}}>{this.state.messageErr ?"*Description can not Empty":""}</Form.Label>
                            </Form.Group>
                            <Button onClick={(e)=>this.handleValidation(e)} variant="dark" type="submit">
                                Add
                            </Button>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
}