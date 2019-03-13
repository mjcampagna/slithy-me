---
date: "2019-03-12"
title: "Strict Type Checking in JavaScript"
---

The [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator is often less precise than one might like. I've found this nice solution to the problem, when more precise checking is desired.

	var utils = {
		//Check types
		isArray: function(x) {
			return Object.prototype.toString.call(x) == "[object Array]";
		},
		isObject: function(x) {
			return Object.prototype.toString.call(x) == "[object Object]";
		},
		isString: function(x) {
			return Object.prototype.toString.call(x) == "[object String]";
		},
		isNumber: function(x) {
			return Object.prototype.toString.call(x) == "[object Number]";
		},
		isFunction: function(x) {
			return Object.prototype.toString.call(x) == "[object Function]";
		}
	}

