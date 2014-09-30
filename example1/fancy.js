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