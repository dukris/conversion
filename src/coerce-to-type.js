import {convertToNumber} from "./convert-to-number.js";
import {stringifyValue} from "./stringify-value.js";

/**
 * Convert value to the specified type.
 *
 * @param value Value
 * @param type Type
 * @returns {*} Coerced value
 */
export function coerceToType(value, type) {
    switch (type) {
        case 'number':
            return convertToNumber(value);
        case 'string':
            return stringifyValue(value);
        case 'boolean':
            return !!value;
        case 'symbol':
            return Symbol(value);
        case 'bigint':
            return BigInt(value);
        default:
            throw new TypeError("Incorrect type!");
    }
}