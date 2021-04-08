import {useEffect,useState} from 'react';
import {Link} from "react-router-dom";

import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
const Navbar = ()=>{
    return(
        <header>
        <Container>
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#home">
                    <img alt="logo" className='logo' src="/vendor/images/logo.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Movies</Nav.Link>
                        <Nav.Link href="#">Tv Shows</Nav.Link>
                        <Nav.Link eventKey={2} href="">Recently Added</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </header>
    )
}

export default Navbar;