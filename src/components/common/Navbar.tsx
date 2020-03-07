import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon } from 'semantic-ui-react';

const Navbar = () => {
    return (
        <Menu fixed="top">
            <Container fluid>
                <Menu.Item className="item">
                    <Icon name="code" color="blue" />
                    <strong>FOOBAR</strong>
                </Menu.Item>
                <Link className="item" to="/">
                    <Icon name="home" />
                    Home
                </Link>
                <Link className="item" to="/example">
                    <Icon name="star outline" />
                    Example
                </Link>
                <Link className="item" to="/search">
                    <Icon name="search" />
                    Search
                </Link>
                <Menu.Item position="right">
                    <Icon name="info" />
                    About
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default Navbar;
