import * as React from "react";

import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { BreakpointMatchMedia } from "./breakpoints";

import "../scss/Navbar.scss";

/**
 * Navigation bar of the website.
 * 
 * It only for linking pages, nothing special.
 */
export default class ASDNavbar extends React.Component {
    /**
     * ID for identify collasp for toggle button event.
     */
    private readonly navbarCollapseId: string = "adsNavBarCollapse";
    /**
     * Specify breakpoint require toggle button.
     */
    private readonly breakpointMQ: MediaQueryList = BreakpointMatchMedia.lg;

    /**
     * Event function for converting between toggle button and oridinary navbar.
     * 
     * @param ev A listener object from provided {@link MediaQueryList}.
     */
    private offcanvasBreakpointHandler(ev: MediaQueryListEvent) {
        const closeBtn: HTMLButtonElement = document.querySelector("body > div#adsNavBarCollapse[role='dialog'] > div.offcanvas-header:first-child > button.btn-close");
        if (
            ev.matches  // DO NOT USES this.breakpointMQ.matches
            && document.body.classList.contains("modal-open")
            && document.body.hasAttribute("data-rr-ui-modal-open")
        ) {
            // Force close collapse if reached `lg` breakpoint.
            closeBtn.click();
        }
    }

    componentDidMount(): void {
        this.breakpointMQ.addEventListener("change", this.offcanvasBreakpointHandler);
    }

    componentWillUnmount(): void {
        this.breakpointMQ.removeEventListener("change", this.offcanvasBreakpointHandler);
    }

    render(): React.ReactNode {
        return <Navbar className={"top-nav"} sticky={"top"} expand={"lg"}>
            <Container fluid={true}>
                <Navbar.Brand href="#" draggable={false}>
                    <img src="https://avatars.githubusercontent.com/u/124354884?s=60" alt="Asserest logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={this.navbarCollapseId}/>
                <Navbar.Offcanvas id={this.navbarCollapseId} className={"d-block d-lg-flex flex-row"}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Pages</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            {
                                Object.entries({
                                    Home: "/",
                                    Schmea: "/schema"
                                }).map(function (entry, index) {
                                    const [displayName, hrefPath] = entry;

                                    return <Nav.Link key={index} href={hrefPath} disabled={window.location.pathname === hrefPath}>
                                        {displayName}
                                    </Nav.Link>;
                                })
                            }
                        </Nav>
                    </Offcanvas.Body>
                    <Offcanvas.Header>
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