import * as React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { SchemaComponent } from "../components/Schema";
import * as SchemaDocObject from "../data/schema_struct";

import { ASDPage } from "./Abstract";


export default class ASDSchema extends ASDPage {
    content(): React.ReactNode {
        return <>
            <h1 className="mt-1 mb-2 mb-lg-3 mx-2 mx-lg-3 mx-xl-2 display-3">JSON Schema documentation</h1>
            <Container className="mt-2 mb-3 mb-lg-5 p-2 mx-0 me-lg-auto p-0 content-list">
                <h3 className="mx-1">Content</h3>
                <ListGroup>
                    <ListGroup.Item action href={"#base"} active={false}>Base structure</ListGroup.Item>
                    <ListGroup.Item action href={"#url"} active={false}>URL configuration</ListGroup.Item>
                    <ListGroup.Item action href={"#ftp"} active={false}>FTP configuration</ListGroup.Item>
                </ListGroup>
            </Container>
            {
                [SchemaDocObject.BASE]
                    .map((scp, index) => <SchemaComponent {...scp} key={index}/>)
            }
        </>;
    }
}