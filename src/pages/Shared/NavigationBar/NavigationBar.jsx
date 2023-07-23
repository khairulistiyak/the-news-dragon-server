import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AutContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AutContext)


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav href="#features">
                                    <Link to={"/"}>Home</Link>
                                </Nav>
                                <Nav href="#pricing">About</Nav>
                                <Nav href="#pricing">Career</Nav>
                            </Nav>
                            <Nav>
                                {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                                }

                                {user ?
                                    <Button onClick={handleLogout} variant="secondary">Logout</Button> :

                                    <Link to={"/login"}><Button variant="secondary">Login</Button></Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

        </div>
    );
};

export default NavigationBar;