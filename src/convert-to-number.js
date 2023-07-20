/**
 * Convert value to number.
 *
 * @param value Value
 * @returns {number} Result
 */
export function convertToNumber(value) {
    if (typeof value === "symbol") {
        value = value.description;
    }
    if (typeof value != "bigint" && isNaN(value)) {
        throw new TypeError("The conversion is not possible!");
    }
    return Number(value);
}