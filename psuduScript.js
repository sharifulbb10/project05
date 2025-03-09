// function calculator(a, b, callBackFun) {
// 	callBackFun(a, b);
// }

// calculator(1, 3, (n1, n2)=>{
// 	console.log(n1+n2);
// });

function calculator(a, b, callbackFun) {
	callbackFun(a, b);
}

calculator( 1, 2, (n, m)=> console.log(n+m))

function cal(a, b, callbackFunction) {
	callBackFunction(a, b);
}

cal(1, 2, (n, m)=> console.log(n+m));

function calculator(a, b, aCallBack) {
	aCallBack(a, b);
}

calculator(1,2,(n, m)=>{ console.log(n+m)});

function calculator(a, b, aCallBack) {
	aCallBack(a, b);
}

calculator(1, 2, (n, m)=> {
	console.log(n+m);
})
// 6
function calculator(a, b, aCallBack) {
	aCallBack(a, b);
}
calculator(1, 2, (n, m)=> {console.log(n+m)});

// 7
function calculator(a, b, aCallBackFun) {
	aCallBackFun(a, b);
}
calculator(1, 2, (n, m)=> {
	console.log(n+m);
})

// 8
function calculator(a, b, aCallBackFunction) {
	aCallBackFunction(a, b);
}
calculator(1, 2, (n, m)=> {
	console.log(n+m);
})

// 9
function calculator(a, b, aCallBackFunc) {
	aCallBackFunc(a, b);
}
calculator(1, 2, (n, m)=>{
	console.log(n+m);
})

// 10
function calculator(a, b, aCallBackFunc) {
	aCallBackFunc(a, b);
}
calculator(1, 3, (n,m)=>{
	console.log(n+m);
})