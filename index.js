/*
Copyright (c) <2015> <Leonard Schuetz>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
	Exports
*/

module.exports = function(){
	return {
		_data: {},
		_notifiers: {},
		get: function(key) {
			return this._data[key];
		},
		set: function(key, value, callback) {
			var oldValue;
			if (this._data[key] !== void 0) {
				if (this._data[key].data !== value) {
					oldValue = this._data[key].data;
					this._data[key].data = value;
					this._data[key].timestamp = Date.now();
				} else {
					return false;
				}
			} else {
				this._data[key] = {
					data: value,
					timestamp: Date.now()
				};
			}
			if (this._notifiers[key] !== void 0) {
				this._notifiers[key].callback(oldValue, value);
			}
			if (typeof callback === 'function') {
				this.setNotifier(key, callback);
			}
			return this._data[key];
		},
		length: function() {
			return Object.keys(this._data).length;
		},
		getJSON: function(key) {
			if (key === void 0) {
				return JSON.stringify(this._data, null, 2);
			} else {
				return JSON.stringify(this._data[key], null, 2);
			}
		},
		setNotifier: function(key, callback) {
			this._notifiers[key] = {};
			this._notifiers[key].key = key;
			this._notifiers[key].callback = callback;
		}
	};
};
