/**
 * Validated boolean.
 */
export class ValidatedBoolean {

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
        if (this.a === undefined || this.a === null || typeof this.a === "object") {
            throw new TypeError("The operation is not possible!");
        }
        if (typeof this.a === "symbol") {
            this.a = this.a.description;
        }
        if (typeof this.a === "bigint") {
            this.a = Number(this.a);
        }
        if (typeof this.a === "number" && this.a !== 0 && this.a !== 1) {
            throw new TypeError("The operation is not possible!");
        }
        if (typeof this.a === "string") {
            if (this.a === "true") {
                return true;
            }
            if (this.a === "false") {
                return false;
            } else {
                throw new TypeError("The operation is not possible!");
            }
        }
        return this.a;
    }

    /**
     * Check if value is boolean.
     *
     * @returns {boolean} Result
     */
    isBoolean = () => {
        if (typeof this.a != "boolean") {
            throw new TypeError("The value is not boolean!");
        }
        return this.a;
    }

}