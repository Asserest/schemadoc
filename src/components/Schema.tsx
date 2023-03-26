import * as React from "react";
import { Container } from "react-bootstrap";

import { ValueType, SchemaDocumentation } from "../data/schema_data";

interface SchemaComponentProp {
    name: string,
    docs: ReadonlyArray<SchemaDocumentation>
}

class SchemaComponent extends React.Component<SchemaComponentProp, Record<string, never>, unknown> {
    private buildDocColumn(value: SchemaDocumentation, index: number): React.ReactNode {
        throw Error("Unimplemented");
    }

    render(): React.ReactNode {
        return <Container>
            {this.props.docs.map(this.buildDocColumn)}
        </Container>;
    }
}