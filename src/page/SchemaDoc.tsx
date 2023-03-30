import * as React from "react";
import { SchemaComponent } from "../components/Schema";
import * as SchemaDocObject from "../data/schema_struct";

import { ASDPage } from "./Abstract";


export default class ASDSchema extends ASDPage {
    content(): React.ReactNode {
        return <>
            {
                [SchemaDocObject.BASE]
                    .map((scp, index) => <SchemaComponent {...scp} key={index}/>)
            }
        </>;
    }
}