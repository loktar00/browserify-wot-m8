Example 3 Using built in node modules
===

For this example all I did was use the built in modules and log out the results, I also used a popular date utility module created for node to illustrate using node modules not specifically made for the browser.

```javascript
'use strict';

// Some of the built in modules
var os          = require('os'),
    url         = require('url'),
    path        = require('path');
    // random npm package
    require('../node_modules/date-utils');

var parsed = url.parse(window.location.href, true);

console.log(os.type());
console.log(parsed.search);
console.log(parsed.port);
console.log(parsed.hash);
console.log(path.normalize('/test//testing/..//sub/tree///inner'));
console.log(Date.getDaysInMonth('2014', Date.getMonthNumberFromName('sep')));
```

Remember to bundle the js you just need to run

`browserify app.js -o app.bundle.js`