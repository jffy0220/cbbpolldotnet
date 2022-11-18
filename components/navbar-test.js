import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';

export default function NavbarTest(props) {

    const bgStyle = {
        backgroundColor: "#85514b"
    }

    const gradient = {
        backgroundImage: "linear-gradient(100deg, #fff 50%, #777 100%);"
    }

    return (
        <>
            <Navbar className="navbarColor" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src="static\CBBlogo2.png"
                            width="50"
                            height="50"
                            className="d-inline-block text-center"
                            alt="CBB Logo"
                        />{' '}r/CollegeBasketball User Poll
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end">
                            <Nav.Link href="#" style={{fontWeight: "bold", color: "#000"}}>Home</Nav.Link>
                            <Nav.Link href="#" style={{fontWeight: "bold", color: "#000"}}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}