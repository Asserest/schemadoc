import * as React from "react";

import { Navbar, Container } from "react-bootstrap";

export default class ASDNavbar extends React.Component {
    render() {
        return <Navbar expanded={true}>
            <Container>
                <Navbar.Brand href="#">
                    <img src="https://avatars.githubusercontent.com/u/124354884?s=60" alt="Asserest logo" />
                </Navbar.Brand>
            </Container>
        </Navbar>;
    }
}