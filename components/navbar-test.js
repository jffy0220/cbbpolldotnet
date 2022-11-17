import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';

export default function NavbarTest(props) {
    return (
        <>
            <Navbar className="mb-3" bg="light">
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
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="primary">Sign In With Reddit</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}