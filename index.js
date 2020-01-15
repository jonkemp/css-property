/**
 * Compares two specificity vectors, returning the winning one.
 *
 * @param {Array} vector a
 * @param {Array} vector b
 * @return {Array}
 * @api public
 */

function compareSpecificity(a, b) {
    for (let i = 0; i < 4; i++) {
        if (a[i] === b[i]) {
            continue;
        }
        if (a[i] > b[i]) {
            return a;
        }
        return b;
    }

    return b;
}

/**
 * CSS property constructor.
 *
 * @param {String} property
 * @param {String} value
 * @param {Selector} selector the property originates from
 * @api public
 */

module.exports = (prop, value, selector) => {
    let o = {};

    /**
     * Compares with another Property based on Selector#specificity.
     *
     * @api public
     */

    const compare = property => {
        const a = selector.specificity(), b = property.selector.specificity(), winner = compareSpecificity(a, b);

        if (winner === a && a !== b) {
            return o;
        }
        return property;
    };

    /**
     * Returns CSS property
     *
     * @api public
     */

    const toString = () => `${prop}: ${value.replace(/['"]+/g, '')};`;

    o = {
        prop,
        value,
        selector,
        compare,
        toString
    };

    return o;
};
