class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`An amount of ${amount} has been deposited into your account`);
  }

  withdraw(amount) {
    this.balance -= amount;
    console.log(`An amount of ${amount} has been debited from your account`);
  }

  checkBalance(){
     console.log(`Your remaining balance is ${this.balance}`);
  }
}

const myAcc = new BankAccount()

myAcc.deposit(100)
myAcc.checkBalance()
myAcc.withdraw(90)
myAcc.checkBalance()
