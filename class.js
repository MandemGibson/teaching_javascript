class BankAccount {
  constructor(amount) {
    this.balance = 0;
    this.amount = amount
  }

  deposit(amount){
    this.balance += amount
    console.log("An amount of ${amount} has been deposited into your account");
    
  }
}
