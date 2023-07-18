import React from 'react';
import reactlogo from "../../../img/logo.png"
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


const Header = () => {
    return (
        <Container className='mt-4'>

            <div className='text-center'>
                <img src={reactlogo} alt="" />
                <p><small className='text-table-secondary'>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={30} pauseOnHover className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;