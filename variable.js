// Write Variables with var, let and const
// Variables with Concatenation & Interpolation

//var, const, let

export var my_name = "Srinivasa Rao Manem";
const my_full_name = "Manem Srinivasa Rao";
var age = 39;
export const dob = "27-05-1990";


//console.log(my_full_name, my_name, age, dob);
//my full name is Manem Srinivasa Rao and my age is 39 and my dob is 27-05-1090

//interpolation: we can call any variable inside string
console.log(`my full name is ${my_full_name} and my age is ${age} and my dob is ${dob}`)

var your_name = "kavitha";
const surname = "K";
const father_name = 'Rao';
console.log(your_name, surname, father_name);
console.log(`my full name is ${surname} ${your_name} and my father name is ${surname} ${father_name}`)
