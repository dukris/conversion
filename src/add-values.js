import {ValidatedValue} from "./validated-value.js";
import {SumOf} from "./sum-of.js";

/**
 * Add values.
 *
 * @param a First value
 * @param b Second value
 * @returns {*} Result
 */
export function addValues(a, b) {
    return new SumOf(
        new ValidatedValue(a).value(),
        new ValidatedValue(b).value()
    ).value();
}