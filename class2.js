export class Bank  
{
   
  constructor(userName, passWord, balance, deposit, widthdrawl, accountType){
    this.user_name = userName;
    this.pass_word = passWord;
    this.balance = balance;
    this.deposit = deposit;
    this.widthdrawl = widthdrawl;
    this.account_type = accountType;
  }

  bankWebSite(otherBankingUrl)
  {
    console.log(otherBankingUrl);
  }
  
  customerUserName(){
    console.log(this.user_name);
  }

  customerBalance()
  {
    console.log(this.balance + this.deposit - this.widthdrawl);
  }

}
//inheritance => link => Bank -> OtherBankDetails
class OtherBankDetails extends Bank 
{
  constructor(userName, passWord, balance, deposit, widthdrawl, accountType, cpassWord)
  {
    super(userName, passWord, balance, deposit, widthdrawl, accountType)
    this.cps = cpassWord;
  }
  customerPassWord()
  {
      console.log(this.cps);
  }
}

const obd1 = new OtherBankDetails("Srini",12345,2000.00,1500.00, 250.00,"Saving", 'srinivas999');
obd1.customerPassWord();

export const k2 = ["K Kavitha", 123456, 60000.00, 40000.00, 85000.00, "Joint"]

//class, variable, functions , constructor, => obs creates => POM
//inheritance 

