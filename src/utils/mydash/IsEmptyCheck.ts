export default function isEmpty(value: any): boolean {
    const type = typeof value;
    switch (type) {
        case "string":
            return !value;
        case "object":
            return value === null ||(Array.isArray(value) ? value.length <= 0 : value["size"]
              ? value.size <= 0
              : (Object.keys(value).length <= 0) );
        default:
            return true;
    }
}
