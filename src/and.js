/**
 * Logical And.
 */
export class And {

    /**
     * Constructor.
     *
     * @param a First boolean value
     * @param b Second boolean value
     */
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    /**
     * Value.
     *
     * @returns {boolean} Result
     */
    value = () => {
        return this.a && this.b;
    }

}