function factorial(n){

 //Base case : if n is 0 or 1, return 1
if(n == 0 || n == 1){
    return 1;

}else {
 //Recursive case: return n times the factorial
    return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120

//function fibonacci(n){

//if(n<=1){
//    return n;
//} else {
//
//    return fibonacci(n-1) + fibonacci(n-2);
//
//    }
//}

//console.log(fibonacci(7)); // 13