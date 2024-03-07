import {details} from '../Kavitha/functions.js';
import { Bank } from './class2.js';
import {k2} from '../Kavitha/class2.js';
import {BankVar} from '../Kavitha/class2Var.js';
details("ram kumar", 28, "CA");

console.log(Bank.bankURL);
const b1 = new Bank("srinipkl",11111,25000.00,25000.00,45000.00); //looking for constructor
b1.bankWebSite(BankVar.netUrl); //experince => pro code => 100 POM
b1.customerUserName();
b1.customerBalance();
var b2 = new Bank(k2[0], k2[1], k2[2], k2[3], k2[4], k2[5]) //100 POM
b2.customerUserName();
b2.customerBalance();

//inheritance => encapsulation