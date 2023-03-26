import * as React from "react";

import { ADSPage } from "./Abstract";

export default class ADSIndex extends ADSPage {
    content(): React.ReactNode {
        return <h1>I am index</h1>;
    }
}