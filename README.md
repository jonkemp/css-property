# css-property

> CSS property constructor

## Install

Install with [npm](https://npmjs.org/package/css-property)

```
npm install --save css-property
```

## Usage

```js
var $ = cheerio.load(html),
    prop = new Property(name, value, sel);

$(el).attr('style', prop);
```

## Credit

The code for this module was originally taken from the [Juice](https://github.com/Automattic/juice) library.

## License

MIT
