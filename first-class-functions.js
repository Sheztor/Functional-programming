
const sum = (x, y) => x + y;

console.log(sum(5, 5))


setTimeout(() => console.log("Hi"), 2000)


function sayHi(saludo){
  return function name(name){
    return saludo + " " + name
  }
}

const sayHiUser = sayHi("Hi")
console.log(sayHiUser("Héctor"))