/**
 * Convert value to string.
 *
 * @param value Value
 * @returns {string} Result
 */
export function stringifyValue(value) {
    if(value === undefined){
        return "undefined";
    }
    if (typeof value === "object") {
        return JSON.stringify(value);
    }
    if (typeof value === "symbol") {
        value = value.description;
    }
    return value.toString();
}
