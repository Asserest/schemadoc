import * as React from "react";

import { ASDPage } from "./Abstract";

export default class ASDIndex extends ASDPage {
    content(): React.ReactNode {
        return <h1>Sample text</h1>;
    }
}