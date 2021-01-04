'use strict'

let sum = document.getElementById('sum')
let jsMath = function () {


    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;

   sum = parseInt(x) + parseInt(y)

   return sum
}

jsMath()


console.log(sum)
console.log(parseInt(x))
console.log(y)
