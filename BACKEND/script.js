let n =5 ;
for (let i=0;i<n;i++){
    console.log("hello, ",i);
}
console.log("bye!");

console.log("-------------------------------------");

//process

//   process.realease              , process.cwd() ,
console.log(process.argv);
let args = process.argv;
for(let i =2;i<args.length; i++){
    console.log("hello to ",args[i])
}

console.log("-------------------------------------");

//module.exports  used to send data 

const somevalue = require("./math");
console.log(somevalue);
console.log("-------------------------------------");
//require   using to get export from another file 
console.log(somevalue.sum(2,2));
console.log(somevalue.pi);

console.log("-------------------------------------");
// one too anothr directory 
