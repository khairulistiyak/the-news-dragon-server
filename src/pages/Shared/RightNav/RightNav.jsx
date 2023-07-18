import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../img/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='w-100 mb-3 mt-4' variant="outline-primary">< FaGoogle className='me-3' /> Login With Google</Button>
            <Button className='w-100 mb-4' variant="outline-secondary"><FaGithub className='me-3' /> Login With Github</Button>
            <div>
                <h4 className='mb-4'>Find Us On</h4>
                <ListGroup className='mb-4'>
                    <ListGroup.Item className=''><FaFacebookF className=' justify-content-between' ></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item className=''><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className=''><FaTwitter></FaTwitter> Facebook</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>

                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;