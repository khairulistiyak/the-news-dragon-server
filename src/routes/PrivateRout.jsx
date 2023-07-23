import React from 'react';
import { useContext } from 'react';
import { AutContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AutContext)
    const location = useLocation()
    console.log(location)
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>

    return (
        <div>

        </div>
    );
};

export default PrivateRout;