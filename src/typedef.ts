/**
 * Replicated JSON structure using Typescript definition.
 */
type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

/**
 * Define a property type that no property required to apply.
 */
type EmptyProps = Record<string, never>;

/**
 * Define a property that contain at least one field.
 */
type ParamProps = { [x: string]: object };

/**
 * The completed replicated type definition of react property.
 */
type ReactProps = ParamProps | Readonly<ParamProps> | EmptyProps;

export {
    JSONValue,
    EmptyProps,
    ReactProps
};