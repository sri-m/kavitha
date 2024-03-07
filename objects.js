//7 Types of Objects: String, integer, float, array,  hash, 3functions and class.
var customer_name = "Ram prasad";
var customer_first_name = "m";
var customer_age = 32;
var sal = 95000.00;
var cust_full_details = ["Ram Prasad", 33, "Hyderabad", 65000.00, 'USA'];
var h1 = {cust_name: 'Rajesh', cust_age: 28, cust_sal: 50500.00}
//for, for of/in, forEach, while
const cars = ["string1", 1, "string3", 2, "string5", 3];

for (let i = 0; i < cars.length; i++) {
	console.log(cars[i]);
	if (cars[i] == 'string3') {
      break;
    }
}
