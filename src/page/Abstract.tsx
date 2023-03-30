import * as React from "react";

abstract class ADSPage extends React.Component {
    abstract content(): React.ReactNode;

    render(): React.ReactNode {
        return <div className="mx-1 mx-md-3 mx-lg-0 mx-xl-3 mt-3">
            {this.content()}
        </div>;
    }
}

export { ADSPage };