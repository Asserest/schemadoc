import * as React from "react";
import { Spinner } from "react-bootstrap";

export default class LoadingComponent extends React.Component {
    render(): React.ReactNode {
        return <div className={"w-100 h-100 position-relative"}>
            <div className={"position-absolute top-50 start-50 translate-middle"}>
                <Spinner animation={"border"} variant={"secondary"}/>
            </div>
        </div>;
    }
}