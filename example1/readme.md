Example 1
===

Our two files are fancy.js and app.js

###fancy.js

```javascript
'use strict';

function setFancyText(el){
    el.style.webkitTransition = 'all 1s ease-in-out';
    el.style.transition = 'all 1s ease-in-out';
    el.style.color = '#e80c3a';
    el.style.fontSize = '2em';
    el.style.fontWeight = 'bold';
    el.textContent = 'such fancy words!';
}

module.exports = function(el){
    setTimeout(function(){setFancyText(el)}, 1000);
};
```

###app.js
```javascript
'use strict';
var fancyText = require('./fancy');

function ready(){
    document.removeEventListener( 'DOMContentLoaded', ready, false );
    window.removeEventListener( 'load', ready, false );

    [].slice.call(document.querySelectorAll('.fancy')).forEach(
        function(el){
            fancyText(el);
        });
}

document.addEventListener( 'DOMContentLoaded', ready, false );
window.addEventListener( 'load', ready, false );
```

To get the js ready just run

```browserify app.js -o app.bundle.js``` 

Bring up `index.html` and watch the magic