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

var _ = require('lodash');
// var i = 0;
// function identity(n){
// 	i = i + 1;
// 	return n;
// }

// memoizedIdentity = memoize(identity);



//memoFoo = _.memoize(foo);

module.exports = _;

_.bind = function(fn, context){
	return fn.bind(context);
}