# ext

A package that gets you the extension of a file.

```bash
const ext = require('@varjmes/ext')
console.log(ext('test.js'))
# Returns '.js'

const ext = require('@varjmes/ext')
console.log(ext('test.spec.js'))
# Returns '.js'

const ext = require('@varjmes/ext')
console.log(ext(['eggs.js', 'test.txt', 'absolute.unit']))
# Returns ['.js', '.txt', '.unit']
```
