import {ValidatedNumber} from "./validated-number.js";

/**
 * Convert value to number.
 *
 * @param value Value
 * @returns {number} Result
 */
export function convertToNumber(value) {
    return Number(new ValidatedNumber(value).value());
}