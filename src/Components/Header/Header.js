import React from 'react';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    let abbr = "";
    if(loggedInUser.email){
        let {name} = loggedInUser;
        name = name.toUpperCase();
        const split_names = name.split(" ");
        for (let i = 0; i < split_names.length; i++) {
            const s = split_names[i].charAt(0);
            abbr += s;
        }
        // abbr.toUpperCase();
    }
    // console.log({abbr});
    return (
        <>
            <Navbar className='my-navbar' bg="transparent" expand="lg">
                <Link to="/home" className="img">
                    <Navbar.Brand><Image style={{height: '40px'}} src={logo} /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav font-italic font-weight-bold">
                            <Link className='text-dark nav-link' to="/home">Home</Link>
                            <Link className='text-dark nav-link' to="/donation">Donation</Link>
                            <Link className='text-dark nav-link' to="/events">Events</Link>
                            <Link className='text-dark nav-link' to="/blog">Blog</Link>
                            {
                                !loggedInUser.email 
                                ? <Link to='/register/5f79e7a2ec4ac24be8700e58' className='btn btn-primary link-btn'>Register</Link>
                                : <Link to='/' className='nav-link special-link'>
                                    <Image className='text-dark user-img' src={loggedInUser.photoURL}></Image> 
                                    <strong> {abbr}</strong>
                                </Link>
                            }
                            <Link to='/admin' className='btn btn-info link-btn'>Admin</Link>
                    </Nav>                
                </Navbar.Collapse>       
            </Navbar>
        </>
    );
};

export default Header;