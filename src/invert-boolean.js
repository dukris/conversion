import {ValidatedBoolean} from "./validated-boolean.js";

/**
 * Return inverted boolean value.
 *
 * @param value Boolean value
 * @returns {boolean} Result
 */
export function invertBoolean(value) {
    return !(new ValidatedBoolean(value).value());
}