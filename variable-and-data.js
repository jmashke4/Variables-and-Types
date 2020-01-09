/*
* Variables, Data Types, and Typing
 */
let obj = {
	key1: "value",
	key2: 4,
	boolean: true,
	obj2:{
		obj2key1: "Internal Object Value",
	}
};

console.log(obj.key1);
console.log(obj.obj2.obj2key1);

let var1 = "2";
let var2 = 5;
let result = var1 + var2;
console.log(result);

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1" + " String 2";
console.log(string);
console.log(add + mult);
console.log(mod);
console.log(sub + division);
console.log(add + obj.key2);
console.log(obj.boolean + add);
console.log(obj.boolean);

/*
*conditionals, functions, scope and loops
 */
// Equals
let equals = 1 ===1;
console.log(equals)
// Greater than
let greaterThan = 5 > 1;
// less than
let lessThan = 2 < 10;
// greater than equals
let greaterthaneq = 5 >= 5;
//less than equals
let lessThaneq = 4 <= 9;
// not equals
let notEquals = 5 !== 2;
let storeA = 4.40;
let storeB = 4.40;
function compareStorePrices (storeA, storeB){
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower) {
		console.log("Store A has a Lower price")
	} else if (storeB < storeA) {
		console.log("Store B has a lower price")
	} else{
		console.log("their prices are equal")
	}
}
compareStorePrices(10, 5);
compareStorePrices(7, 10);
compareStorePrices(10, 10);
function squareNum (number){
	return number * number;
}
let squaredNumber = squareNum(4);
console.log(squaredNumber);

//scope
let x = 10;
function addNumbers (n, m, x) {
	console.log(x);
	let b;
	if (1===1) {
		let b = 8;
	}
	console.log(b);
	return n + m;
}
addNumbers(1, 2, 10);

//arrays
let ourArray = [1, 2, 3, 4, 5, 6, 7];
let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
	//console.log("i is equal to:" + i);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++){
		console.log("j is equal to:" + j);

	}
}

let z = 0;
while (z < 10) {
	console.log('Ran');
	z = z + 1;
}


