import * as React from "react";
import { SchemaComponent } from "../components/Schema";
import { ValueType } from "../data/schema_data";

import { ADSPage } from "./Abstract";


export default class ADSSchema extends ADSPage {
    content(): React.ReactNode {
        return <>
            <SchemaComponent name="Sample" docs={
                [
                    {
                        key: "Foo",
                        desc: "Sample",
                        type: ValueType.String,
                        optional: false
                    }
                ]
            } example={{foo:"bar"}} schemaURL={""}/>
        </>;
    }
}