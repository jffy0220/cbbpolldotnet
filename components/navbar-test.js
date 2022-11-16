import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';

const navStyle = {
    backgroundImage: `url(/static/navbar/bannerBackground.png)`,
    height: "100px"
}

export default function NavbarTest(props) {
    return (
        <>
            <Navbar style={navStyle} expand="lg" className="mb-3">
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