// Pure Function
function sumar(a,b){
    return a + b;
}

console.log(sumar(3,4)); // Output 7
console.log(sumar(3,4)); // Output 7 -- Same Result

// Impure Function
let res = 0;
function sumarv2(a,b){
    res = a + b;
    return res;
}

console.log(sumarv2(3,4)); // Output: 7
console.log(res); // Output: 7 (External value has changed)

console.log(sumarv2(3,4)); // Output: 7 (Could have a different Result)
console.log(res); // Output: 7 (External value is still 7)

function generateRandomNumber(){
    return Math.random();
}

console.log(generateRandomNumber());
console.log(generateRandomNumber());