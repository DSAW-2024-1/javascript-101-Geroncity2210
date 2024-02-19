// Sum of Two Numbers
function sum(a, b) {
  if(isNaN(a) || isNaN(b)){
    console.log('Los datos de entrada no son adecuados');
    return;
  }else{
    return a+b
  }
}

// Factorial of a Number
function factorial(n) {
  if(isNaN(n)){
    console.log("Los datos de entrada no son adecuados");
    return;
  }else{
    let fact = 1
    for (let i = n; i >= 1; i--) {
      fact = fact*i
    }
    return fact
  }
}

// Find the Largest Number
function findLargest(arr) {
  if(typeof arr != 'object'){
    console.log("Los datos de entrada no son adecuados");
    return;
  }else{
    let bigger_number = Math.max(...arr);
    return bigger_number;
  }
}

// Count Vowels in a String
function countVowels(str) {
if(typeof str === "string"){
  const vowels = ["a","e","i","o","u","A","E","I","O","U"];
  let cont = 0;
  for (let i = 0;i< str.length;i++) {
    if(vowels.includes(str.charAt(i))){
      cont++;
    }
  }
  return cont;
}else{
  console.log("Los datos de entrada no son adecuados");
}
}

// Check if a Number is Prime
function isPrime(n) {
  if(isNaN(n)){
    console.log("Los datos de entrada no son adecuados")
    return;
  }else{
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n !== 1;
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
