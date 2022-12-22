// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//     return (
//         <div className='header-site'>
//             <Link to = '/home'>Home</Link>
//             <Link to = '/courses'>Courses</Link>
//             <Link to = '/statistics'>Statistics</Link>
//             <Link to = '/blogs'>Blogs</Link>
//             <Link to = '/about'>About</Link>
            
//         </div>
//     );
// };

// export default Header;



import React from 'react';
import './Header.css';
import { Link, Router } from 'react-router-dom';
const { Navbar, Container, Nav, NavDropdown, Form, Button } = require("react-bootstrap");

const Header = () => {
    return (
        <div>
            <Navbar  className='total-nav' expand="lg">
                <Container >
                    <Navbar.Brand href="" className='web-name'>EduTest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '150px' }}
                        navbarScroll
                    >
                        <Nav.Link className='nav-btn ' as={Link} to={'/home'}>Home</Nav.Link>
                        <Nav.Link className='nav-btn' as={Link} to={'/courses'}>Courses</Nav.Link>
                        <Nav.Link className='nav-btn' as={Link} to={'/statistics'}>Statistics</Nav.Link>
                        <Nav.Link className='nav-btn' as={Link} to={'/blogs'}> Blogs</Nav.Link>
                        <Nav.Link className='nav-btn' as={Link} to={'/about'}>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </div>
    );
};

export default Header;