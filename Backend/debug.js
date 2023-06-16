let a = "23010_OP010";
let temp = parseInt(a.substring(8,11),10)+1;
console.log(temp);

const sequence = a.toString().padStart(3, '0');

const year = new Date().getFullYear().toString().substring(2);
console.log(year);

let b = 3;
const c = b.toString().padStart(3, '0');
console.log(c);