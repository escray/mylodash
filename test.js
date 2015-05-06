var once = require("./index.js").once;

var i = 0;
function add1(){
	//console.log(i);
	return i += 1;
}

//add1();

addOnce = once(add1);

addOnce();

//console.log(i);

function foo(arg){
	console.log(arg);
	return arg;
}

var memo = require("./index.js").memoize;

var memoFoo = memo(foo);

memoFoo(1);
memoFoo(1);
memoFoo(2);