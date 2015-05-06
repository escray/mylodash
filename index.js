var _ = {
	// ...

}

_.once = function(fn){
	var invoked = false;
	var result;
	return function(){
		if (invoked) {
		}
		else{
			result = fn();

			invoked = true;
		}

		return result;
	}
}

_.memoize = function(fn, callback){
	var obj = {};

	return function(arg){
		var key = arg;
		if (callback) {
			key = callback(arg);
		};

		if (!obj.hasOwnProperty(key)){
			obj[key] = fn(arg);
		}

		return obj[key];

	}

}

module.exports = _;

_.bind = function(fn, context){
	return fn.bind(context);
}