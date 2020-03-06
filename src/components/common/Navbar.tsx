import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const Navbar = () => {
    return (
        <Menu fixed="top">
            <Container fluid>
                <Menu.Item className="item">
                    <strong>FOOBAR</strong>
                </Menu.Item>
                <Link className="item" to="/">
                    Home
                </Link>
                <Link className="item" to="/example">
                    Example
                </Link>
                <Menu.Item position="right">About</Menu.Item>
            </Container>
        </Menu>
    );
};

export default Navbar;
