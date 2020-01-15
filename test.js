/*eslint-disable */

const assert = require('assert');
const selector = require('style-selector');
const property = require('./');

describe('property', () => {
    it('should return an object', () => {
        const bodySelector = selector('body');
        const prop = property('font-family', 'Arial', bodySelector);
        assert(prop);
        assert.equal(prop.prop, 'font-family');
        assert.equal(prop.value, 'Arial');
        assert(prop.selector);
        assert.equal(prop.selector.text, 'body');
    });
});

describe('property.toString', () => {
    it('should return a css declaration', () => {
        const bodySelector = selector('body');
        const prop = property('font-family', 'Arial', bodySelector);
        assert.equal(prop.toString(), 'font-family: Arial;');
    });
});

describe('property.compare', () => {
    it('should return the more specific of two properties', () => {
        const bodySelector = selector('body');
        const h1Selector = selector('h1');
        const propA = property('font-family', 'Arial', bodySelector);
        const propB = property('color', 'blue', h1Selector);
        const winner = propA.compare(propB);
        assert.equal(winner.selector.text, 'h1');
    });

    it('should return the second of two important properties', () => {
        const divSelector = selector('div');
        const propA = property('color', 'black', divSelector);
        const propB = property('color', 'blue', divSelector);
        const winner = propA.compare(propB);
        assert.equal(winner.selector.text, 'div');
        assert.equal(winner.prop, 'color');
        assert.equal(winner.value, 'blue');
    });
});
