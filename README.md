# Kcache
Small caching api for node. Can also be used in the browser.

# Installation
Download via GitHub or NPM
```
npm install kcache
```

Initialize like this:
```javascript
var cache = Kcache();
```
You can then set, get, observe and print out the data as json using these methods:

# set
```javascript
cache.set("yourKey", "yourValue", function (oldValue, newValue) { //yourCallback });
```
the callback (last parameter) is optional, so you don't have to provide one if you don't need to.

# get
```javascript
cache.get("yourKey");
```
This returns an object that looks like that:
```json
{
	data: "yourValue",
	timestamp: 123456789
}
```

# observe
```javascript
cache.setNotifier("yourKey", function(oldValue, newValue) { //yourCallback });
```
You can also set a callback while setting a property value, by providing the callback as a third parameter in the set method.

# print JSON
You can either get the json for only one item or the whole thing.
```
cache.getJSON("yourKey");
```
```
acache.getJSON();
```
