import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as MDNTable from "@rmwc/data-table";
import { Prism } from "react-syntax-highlighter";

import { SchemaDocumentation, ValueType } from "../data/schema_data";
import SchemaComponentProp from "../data/schema_struct";

import "../scss/Schema.scss";

const schemaRoot = new URL("https://asserest.github.io/json-schema/");

/**
 * A component for documenting each JSON schema file.
 */
class SchemaComponent extends React.Component<SchemaComponentProp, Record<string, never>, unknown> {
    /**
     * Generate the content for optional properties.
     * 
     * @param p_data Value of optional properites.
     * 
     * @returns Either actual value or monospace `(N/A)` if nulled.
     */
    private static nullableHandler(p_data?: string | number | boolean): React.ReactNode {
        return p_data ?? <code>(N/A)</code>;
    }

    /**
     * Generate each column of table.
     * 
     * @param value Documentation of each keys.
     * @param index Order index.
     * 
     * @returns A row of Material Design's data table in {@link React.ReactNode} form.
     */
    private static buildDocColumn(value: SchemaDocumentation, index: number): React.ReactNode {
        return <MDNTable.DataTableRow key={index}>
            <MDNTable.DataTableCell alignMiddle>{SchemaComponent.nullableHandler(value.key)}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle style={{whiteSpace: "pre-wrap"}}>{value.desc}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>
                <code className={"value-type"}>{ValueType[value.type].toLowerCase()}</code>
            </MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>{value.optional ? "Yes" : "No"}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>{SchemaComponent.nullableHandler(value.comment)}</MDNTable.DataTableCell>
        </MDNTable.DataTableRow>;
    }

    render(): React.ReactNode {
        return <Container id={this.props.idTag}>
            <Row>
                <Col>
                    <h3>{this.props.name}</h3>
                </Col>
            </Row>
            <Row className="my-2 table-container flex-xl-nowrap">
                <Col className="mx-1 mx-xl-4 my-2 my-xl-0" xl={"7"}>
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
                                {this.props.docs.map(SchemaComponent.buildDocColumn)}
                            </MDNTable.DataTableBody>
                        </MDNTable.DataTableContent>
                    </MDNTable.DataTable>
                </Col>
                <Col className="mx-2 px-0 mx-xl-0 my-1 my-xl-0 flex-shrink-1" xl={"auto"}>
                    <p className="fs-5">Example:</p>
                    <Prism language={"json"} className={"sample-script"}>
                        {JSON.stringify(this.props.example, null, 4)}
                    </Prism>
                </Col>
            </Row>
            <Row>
                <Col className="m-2 d-flex justify-content-center">
                    <Button color={"primary"} href={new URL(this.props.schemaURL, schemaRoot).toString()}>Schema source code</Button>
                </Col>
            </Row>
        </Container>;
    }
}

export { SchemaComponent };