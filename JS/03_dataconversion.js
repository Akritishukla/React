let score = "33abc"

//console.log(typeof score)
//console.log(Number(score))

const valueInNumber = Number(score);
//console.log(typeof valueInNumber) // typeof is number but actually its wrong 

//"33" => converted in number 33
// "33abc" => NaN
//typeof(NaN) => number (confusing but fact)

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
//"AKriti" => true

let randomNumber = 33
let stringNumber = String(randomNumber);

console.log(stringNumber);
console.log(typeof stringNumber)