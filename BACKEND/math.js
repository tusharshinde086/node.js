const sum = (a,b) => a + b ;
const mul=(a,b) => a*b;
const g = 9.8;
const pi =3.14;

//module.exports  used in script.js 

module.exports = "hello tushar";

console.log("-------------------------------------");

let obj = {
    sum : sum,
    mul : mul ,
    g: g ,
    pi : pi 
};
module.exports = obj ;