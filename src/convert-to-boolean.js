import {ValidatedBoolean} from "./validated-boolean.js";

/**
 * Convert value to boolean.
 *
 * @param value Value
 * @returns {boolean} Result
 */
export function convertToBoolean(value) {
    return !!(new ValidatedBoolean(value).value());
}