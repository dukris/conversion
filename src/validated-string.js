/**
 * Validated string.
 */
export class ValidatedString {

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
        if (this.a === undefined) {
            this.a = "undefined";
        }
        if (typeof this.a === "object") {
            this.a = JSON.stringify(this.a);
        }
        if (typeof this.a === "symbol") {
            this.a = this.a.description;
        }
        return this.a;
    }

}