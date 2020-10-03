import React from 'react';
import {Navbar} from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
            <div className="header">
            <Navbar bg="light">
                <img src='https://image4.owler.com/logo/stackline_owler_20170129_010716_original.png' width="150" height ="30" className="d-inline-block align-top" alt=""/>
            </Navbar>
            </div>
    )
}

export default Header
