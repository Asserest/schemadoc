enum ValueType {
    Number,
    Integer,
    String,
    Boolean,
    Array,
    Object
}

interface SchemaDocumentation {
    key: string,
    desc: string,
    type: ValueType,
    optional: boolean,
    comment?: string
}

export { ValueType, SchemaDocumentation };