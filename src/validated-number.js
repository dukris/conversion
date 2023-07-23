/**
 * Validated number.
 */
export class ValidatedNumber {

    /**
     * Constructor.
     *
     * @param a Value
     */
    constructor(a) {
        this.a = a;
    }

    /**
     * Validated value.
     *
     * @returns {any} Result
     */
    value = () => {
        if (typeof this.a === "symbol") {
            this.a = this.a.description;
        }
        if (typeof this.a != "bigint" && isNaN(this.a)) {
            throw new TypeError("The conversion is not possible!");
        }
        return this.a;
    }

}