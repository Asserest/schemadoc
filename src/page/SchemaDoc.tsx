import * as React from "react";
import { SchemaComponent } from "../components/Schema";
import * as SchemaDocObject from "../data/schema_struct";

import { ADSPage } from "./Abstract";


export default class ADSSchema extends ADSPage {
    content(): React.ReactNode {
        return <>
            {
                [SchemaDocObject.BASE]
                    .map((scp, index) => <SchemaComponent {...scp} key={index}/>)
            }
        </>;
    }
}