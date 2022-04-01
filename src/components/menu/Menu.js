import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

class Menu extends React.Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Gato</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Juego</Nav.Link>
                        <Nav.Link href="#link">Historia</Nav.Link>
                        <NavDropdown title="Otras opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Conoce más</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Perros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Menu;