import * as React from "react";

import Nav from "../components/Navbar";

abstract class ADSPage extends React.Component {
    abstract content(): React.ReactNode;

    render(): React.ReactNode {
        return (
            <div>
                <Nav/>
                <div className="mx-1 mx-md-3 mx-lg-5 mt-3">
                    {this.content()}
                </div>
            </div>
        );
    }
}

export { ADSPage };