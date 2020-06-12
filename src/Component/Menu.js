import React from 'react'

import {Nav,Navbar,Button,FormControl,Form} from 'react-bootstrap'

function Menu() {
    return (
        <div>
    <Navbar bg="light" variant="light">
      <div className="container">
       <Navbar.Brand href="#home">AMS</Navbar.Brand>
       <Nav className="mr-auto">
       <Nav.Link href="Main.js">Home</Nav.Link>
       </Nav>
       <Form inline>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-success">Search</Button>
       </Form>
       </div>
  </Navbar>
        </div>
    )
}

export default Menu
