/**
 * Validated value.
 */
export class ValidatedValue {

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
        if (this.a === undefined || this.a === null
            || ((typeof this.a === "object" && !Array.isArray(this.a)))) {
            throw new TypeError("The operation is not possible!");
        }
        if (typeof this.a === "symbol") {
            this.a = this.a.description;
        }
        return this.a;
    }

}