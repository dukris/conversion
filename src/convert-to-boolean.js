/**
 * Convert value to boolean.
 *
 * @param value Value
 * @returns {boolean} Result
 */
export function convertToBoolean(value) {
    if (value === undefined || value === null || typeof value === "object") {
        throw new TypeError("The operation is not possible!");
    }
    if (typeof value === "symbol") {
        value = value.description;
    }
    if (typeof value === "bigint") {
        value = Number(value);
    }
    if (typeof value === "number" && value !== 0 && value !== 1) {
        throw new TypeError("The operation is not possible!");
    }
    if (typeof value === "string") {
        if (value === "true") {
            return true;
        }
        if (value === "false") {
            return false;
        } else {
            throw new TypeError("The operation is not possible!");
        }
    }
    return !!value;
}