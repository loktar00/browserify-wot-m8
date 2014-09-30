(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./fancy":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
