import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as MDNTable from "@rmwc/data-table";
import { Prism } from "react-syntax-highlighter";

import { SchemaDocumentation, ValueType } from "../data/schema_data";

import "../scss/Schema.scss";

interface SchemaComponentProp {
    name: string,
    docs: ReadonlyArray<SchemaDocumentation>
}

class SchemaComponent extends React.Component<SchemaComponentProp, Record<string, never>, unknown> {
    private buildDocColumn(value: SchemaDocumentation): React.ReactNode {
        return <MDNTable.DataTableRow>
            <MDNTable.DataTableCell alignMiddle>{value.key}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>{value.desc}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>
                <code className={"value-type"}>{ValueType[value.type].toLowerCase()}</code>
            </MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>{value.optional ? "Yes" : "No"}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>{value.comment ?? "(N/A)"}</MDNTable.DataTableCell>
        </MDNTable.DataTableRow>;
    }

    render(): React.ReactNode {
        return <Container>
            <Row>
                <Col>
                    <h3>{this.props.name}</h3>
                </Col>
            </Row>
            <Row className="my-2 table-container">
                <Col className="mx-1 mx-lg-4 my-2 my-lg-0" lg={"8"}>
                    <MDNTable.DataTable>
                        <MDNTable.DataTableContent>
                            <MDNTable.DataTableHead>
                                <MDNTable.DataTableRow>
                                    <MDNTable.DataTableHeadCell>Name</MDNTable.DataTableHeadCell>
                                    <MDNTable.DataTableHeadCell>Description</MDNTable.DataTableHeadCell>
                                    <MDNTable.DataTableHeadCell>Type</MDNTable.DataTableHeadCell>
                                    <MDNTable.DataTableHeadCell>Optional</MDNTable.DataTableHeadCell>
                                    <MDNTable.DataTableHeadCell>Comments</MDNTable.DataTableHeadCell>
                                </MDNTable.DataTableRow>
                            </MDNTable.DataTableHead>
                            <MDNTable.DataTableBody>
                                {this.props.docs.map(this.buildDocColumn)}
                            </MDNTable.DataTableBody>
                        </MDNTable.DataTableContent>
                    </MDNTable.DataTable>
                </Col>
                <Col className="ms-2 me-1 my-1 my-lg-0">
                    <p className="fs-5">Example:</p>
                    <Prism language={"json"}>
                        {
                            JSON.stringify({
                                foo: "bar"
                            }, null, 4)
                        }
                    </Prism>
                </Col>
            </Row>
        </Container>;
    }
}

export { SchemaComponent };