import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user]=useAuthState(auth);
    //handle SignOut
    const handleSignOut=()=>{
      signOut(auth);
    }
    return (
        <div className='navbar-container '>
            {/* <Navbar bg="danger" variant="dark"> */}
                {/* <Container className='main-navbar text-center'> */}
                    {/* <Navbar.Brand to="#home">Navbar</Navbar.Brand> */}
                    <Nav className="navBar">
                        <Link to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blogs</Link>
                        { user ?<Link to="/login" onClick={handleSignOut}>Sign Up</Link>:
                        <Link to="/login">Login</Link>}
                        {/* <Link to="/register">Register</Link> */}
                    </Nav>
                {/* </Container> */}
            {/* </Navbar> */}
        </div>
    );
};

export default Header;