import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as MDNTable from "@rmwc/data-table";

import { SchemaDocumentation, ValueType } from "../data/schema_data";

import "@material/data-table/mdc-data-table.scss";

interface SchemaComponentProp {
    name: string,
    docs: ReadonlyArray<SchemaDocumentation>
}

class SchemaComponent extends React.Component<SchemaComponentProp, Record<string, never>, unknown> {
    private buildDocColumn(value: SchemaDocumentation): React.ReactNode {
        return <MDNTable.DataTableRow>
            <MDNTable.DataTableCell alignMiddle>{value.key}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle>{value.desc}</MDNTable.DataTableCell>
            <MDNTable.DataTableCell alignMiddle><pre style={{margin: 0}}>{ValueType[value.type].toLowerCase()}</pre></MDNTable.DataTableCell>
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
            <Row>
                <Col className="mt-3 mx-1 mx-lg-4">
                    <MDNTable.DataTable style={{width: "100%"}}>
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
            </Row>
        </Container>;
    }
}

export { SchemaComponent };