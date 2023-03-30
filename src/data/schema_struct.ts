import { SchemaDocumentation, ValueType } from "./schema_data";

type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

/**
 * A property of the schema component.
 */
interface SchemaComponentProp {
    /**
     * Documents name, basically refer to JSON schema filename.
     */
    name: string,
    /**
     * Unique string for fragment to locate documentation.
     */
    idTag: string,
    /**
     * Content of documentation.
     */
    docs: ReadonlyArray<SchemaDocumentation>,
    /**
     * Example of JSON data using JavaScript object.
     */
    example: JSONValue,
    /**
     * Schema URL, actually is filename of JSON schema.
     */
    schemaURL: string
}

export default SchemaComponentProp;

/**
 * A property for rendering `base.json` schema.
 */
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
        },
        {
            url: "https://example.com",
            "...": "(See in URL schema)"
        },
        {
            url: "ftp://example.com",
            "...": "(See in FTP schema)"
        },
        {
            url: "https://example.com",
            "...": "(See in URL schema)"
        },
        {
            url: "ftp://example.com",
            "...": "(See in FTP schema)"
        },
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
