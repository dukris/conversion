/**
 * Add values.
 *
 * @param a First value
 * @param b Second value
 * @returns {*} Result
 */
export function addValues(a, b) {
    if (a === undefined || b === undefined || a === null || b === null
        || ((typeof a === "object" && !Array.isArray(a)) || (typeof b === "object" && !Array.isArray(b)))) {
        throw new TypeError("The operation is not possible!");
    }
    if (typeof a === "symbol") {
        a = a.description;
    }
    if (typeof b === "symbol") {
        b = b.description;
    }
    return a + b;
}