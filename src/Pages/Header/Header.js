import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar-container'>
            {/* <Navbar bg="danger" variant="dark"> */}
                {/* <Container className='main-navbar text-center'> */}
                    {/* <Navbar.Brand to="#home">Navbar</Navbar.Brand> */}
                    <Nav className="navBar">
                        <Link to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blogs</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        
                    </Nav>
                {/* </Container> */}
            {/* </Navbar> */}
        </div>
    );
};

export default Header;