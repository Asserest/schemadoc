import * as React from "react";

import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

import "../scss/Navbar.scss";

export default class ASDNavbar extends React.Component {
    private readonly navbarCollapseId: string = "adsNavBarCollapse";

    render() {
        return <Navbar sticky={"top"} expand={"lg"}>
            <Container fluid={true}>
                <Navbar.Brand href="#">
                    <img src="https://avatars.githubusercontent.com/u/124354884?s=60" alt="Asserest logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={this.navbarCollapseId}/>
                <Navbar.Offcanvas id={this.navbarCollapseId}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>External link</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            <Nav.Link>GitHub</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>;
    }
}