/*
Copyright (c) <2015> <Leonard Schuetz>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
	Unit tests
*/

var Kcache = require('./index.js')

/* set method */
var cache = new Kcache()

cache.set('author', {
	name: 'Leonard Schuetz',
	age: 15
}, function (oldValue, newValue) {
	if (oldValue.age !== newValue.age && oldValue.name === newValue.name) {
		console.log('# Test 1 passed!')
	} else {
		console.log('# Test 1 failed!');
	}
})

cache.set('author', {
	name: 'Leonard Schuetz',
	age: 16
})

/* get method */
var cache = new Kcache();
cache.set('author', 'Leonard Schuetz');
if (cache.get('author').data == 'Leonard Schuetz') {
	console.log('# Test 2 passed!');
} else {
	console.log('# Test 2 failed!');
}

/* length method */
var cache = new Kcache();
cache.set('author', 'Leonard Schuetz');
if (cache.length() == 1) {
	console.log('# Test 3 passed!');
} else {
	console.log('# Test 3 failed!');
}

/* getJSON method */
var cache = new Kcache();
cache.set('author', {
	name: 'Leonard Schuetz',
	age: 15
});
var json = cache.getJSON('author');
if (JSON.parse(json).data.age == 15) {
	console.log('# Test 4 passed!');
} else {
	console.log('# Test 4 failed!');
}

/* setNotifier method */
var cache = new Kcache();
cache.set('author', 'Leonard Schuetz');
cache.setNotifier('author', function (oldValue, newValue) {
	if (oldValue !== newValue) {
		console.log('# Test 5 passed!');
	} else {
		console.log('# Test 5 failed!');
	}
});
cache.set('author', 'Barack Obama');
