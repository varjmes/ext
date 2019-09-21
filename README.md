# ext

[![npm (scoped)](https://img.shields.io/npm/v/@varjmes/ext?style=flat-square)](https://www.npmjs.com/package/@varjmes/ext)

A package that gets you the extension of a file.

```js
const ext = require('@varjmes/ext')
console.log(ext('test.js'))
# OR
npx @varjmes/ext test.js
# Returns '.js'

const ext = require('@varjmes/ext')
console.log(ext('test.spec.js'))
# OR
npx @varjmes/ext test.spec.js
# Returns '.js'

const ext = require('@varjmes/ext')
console.log(ext(['eggs.js', 'test.txt', 'absolute.unit']))
# OR
npx @varjmes/ext eggs.js test.txt absolute.unit
# Returns ['.js', '.txt', '.unit']
```
