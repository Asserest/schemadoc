/**
 * Enumerated JSON value type.
 */
enum ValueType {
    Number,
    Integer,
    String,
    Boolean,
    Array,
    Object
}

/**
 * A documentation of the schema.
 */
interface SchemaDocumentation {
    /**
     * Key name.
     * 
     * If it is root container, it can be left as `null`.
     */
    key?: string,
    /**
     * Description of this key.
     */
    desc: string,
    /**
     * JSON type.
     */
    type: ValueType,
    /**
     * Determine this key can be omitted or not.
     */
    optional: boolean,
    /**
     * Additional comment for reminding usage.
     */
    comment?: string
}

export { ValueType, SchemaDocumentation };