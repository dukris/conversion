import {ValidatedString} from "./validated-string.js";

/**
 * Convert value to string.
 *
 * @param value Value
 * @returns {string} Result
 */
export function stringifyValue(value) {
    return new ValidatedString(value).value()
        .toString();
}
