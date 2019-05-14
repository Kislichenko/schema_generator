import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Generator from './generator/Generator'

class App extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert("AAA");
    }

  render() {
    return (
      <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">Service</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href="#objects">Объекты</Nav.Link>
                      <Nav.Link href="#generator">Генератор схем</Nav.Link>
                      <Nav.Link href="#about">О сервисе</Nav.Link>
                  </Nav>
                  <NavDropdown title="Профиль" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Профиль</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.2">Выход</NavDropdown.Item>
                  </NavDropdown>
              </Navbar.Collapse>
          </Navbar>
          <Generator />

      </div>
    );
  }
}

export default App;
