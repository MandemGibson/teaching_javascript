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
}
