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