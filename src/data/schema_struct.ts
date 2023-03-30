import { SchemaDocumentation, ValueType } from "./schema_data";

interface SchemaComponentProp {
    name: string,
    idTag: string,
    docs: ReadonlyArray<SchemaDocumentation>,
    example: object | object[],
    schemaURL: string
}

export default SchemaComponentProp;

const BASE: SchemaComponentProp = {
    name: "Base structre",
    idTag: "base",
    docs: [
        {
            type: ValueType.Array,
            desc: "Container of URL assertion test script",
            optional: false
        }
    ],
    example: [
        {
            url: "https://example.com",
            "...": "(See in URL schema)"
        },
        {
            url: "ftp://example.com",
            "...": "(See in FTP schema)"
        }
    ],
    schemaURL: "base.json"
};

export { BASE };
