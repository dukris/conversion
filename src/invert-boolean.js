/**
 * Return inverted boolean value.
 *
 * @param value Boolean value
 * @returns {boolean} Result
 */
export function invertBoolean(value) {
    if (typeof value != "boolean") {
        throw new TypeError("Type of parameter is incorrect!");
    }
    return !value;
}