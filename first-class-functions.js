// Function assigned to constant
const sum = (x, y) => x + y;

console.log(sum(5, 5))

// Function declared at runtime
// Function being passed as an argument to another function
setTimeout(() => console.log("Hi"), 2000)

// A function returning another function
function sayHi(saludo){
  return function name(name){
    return saludo + " " + name
  }
}
const sayHiUser = sayHi("Hi")
console.log(sayHiUser("Héctor"))