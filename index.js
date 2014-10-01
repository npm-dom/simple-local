/*global window*/

/**
 * Module dependencies.
 */

var assert = require('assert');
var debug = require('debug');

/**
 * Get the current value.
 *
 * @param {String} key
 * @return {Any}
 * @api public
 */

exports.get = function(key) {
  assert(window.localStorage, 'simple-local: window.localStorage should exist');
  assert(typeof key, 'string', 'simple-local: namespace should be a string');

  var val = _get(key);

  this.debug('get ', val);
  return val;
};

/**
 * Update the current val.
 *
 * @param {String} key
 * @param {Any} value
 * @api public
 */

exports.set = function(key, val) {
  assert(window.localStorage, 'simple-local: window.localStorage should exist');
  assert.equal(typeof key, 'string', 'simple-local: key should be a string');
  assert.notEqual(typeof val, 'undefined', 'simple-local: val should exist');

  var oldVal = _get(key);
  var newVal = JSON.stringify(val)

  this.debug('set ', newVal, oldVal);
  window.localStorage[key] = newVal;
};

/**
 * Get an object from localStorage
 *
 * @param {String} key
 * @return {Any}
 * @api private
 */

function _get(key) {
  var val = window.localStorage[key];
  val = val.length
    ? JSON.parse(val)
    : undefined;
  return val;
}
