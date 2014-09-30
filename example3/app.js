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