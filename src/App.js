import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './style.css';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
//import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavDropdown, Container, Form, InputGroup,DropdownButton,Dropdown } from 'react-bootstrap';

const ExampleToast = ({ children }) => {

  return (
    <div className="App">
      <div id="style-custom">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">Saint Laurent</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <InputGroup className="center-fix lg w-75">
          <DropdownButton
            variant="secondary"
            title="폴더선택"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
          <Form.Control
            placeholder="저장할 링크를 입력해주세요."
            aria-label="Insert the rink."
            aria-describedby="basic-addon2"
          />
          <Button variant="secondary" id="button-addon2">
            링크저장
          </Button>
        </InputGroup>
      </div>
      
    </div>
  );
};

const App = () => (
    <>
      <ExampleToast/>
    </>

);

export default App;