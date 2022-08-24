import React from 'react';
import {Link} from "react-router-dom"
import "../components/Header.css"
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {

    return (
    <Navbar  bg="red" variant="light" >
        <Container>
        <Navbar.Brand href="/">Axios Practice</Navbar.Brand>
        <Nav className="me-auto">
        <Link to="/robos">Robos</Link>
        &nbsp; | &nbsp;
        <Link to="/pokemon">Pokemon</Link>
        &nbsp; | &nbsp;
        <Link to="/randomquote">Quotes</Link>
        &nbsp; | &nbsp;
        </Nav>
        </Container>
    </Navbar>
    )
}