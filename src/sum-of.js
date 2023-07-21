import {And} from "./and.js";

/**
 * Sum.
 */
export class SumOf {

    /**
     * Constructor.
     *
     * @param a First value
     * @param b Second value
     */
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    /**
     * Get sum of values.
     *
     * @returns {any} Result
     */
    value = () => {
        if (typeof this.a === "boolean" && typeof this.b === "boolean") {
            return new And(this.a, this.b).value();
        }
        if ((typeof this.a === "boolean" && typeof this.b === "number")
        || (typeof this.b === "boolean" && typeof this.a === "number")) {
            throw new TypeError("The operation is not possible!");
        }
        return this.a + this.b;
    }

}