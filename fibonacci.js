function fibonacciSeries(arr ,length){
	let num1 = arr[0];
	let num2 = arr[1];
	let nextNum;
	let count = 2;
	while(count<length){
    nextNum = parseInt(num1) + parseInt(num2);
    num1 = num2;
    num2 = nextNum;
    arr.push(nextNum);
    count++;
	}
	return arr;

}
let n = prompt("Enter the first number" ," ");
let m =  prompt("Enter the second number" ," ");
let q = prompt("Enter the length", " ")
console.log(fibonacciSeries( [n,m], q) );