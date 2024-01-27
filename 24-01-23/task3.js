// Write a JavaScript program that creates a class called "BankAccount"
// with properties for account number and #balance. Include methods to
// deposit and withdraw money from the account. Create some instances
// of the "BankAccount" class, deposit some money, and withdraw a portion
// of it.

class BankAccount {
  #balance;
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.#balance = 0;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(
        "Insufficient funds. Current balance: " +
          this.#balance +
          ", needed is: " +
          amount
      );
    } else {
      this.#balance -= amount;
      console.log("Withdrawal successful. Current balance: " + this.#balance);
    }
  }
  get balance() {
    return this.#balance;
  }
}

const account1 = new BankAccount(123456);

account1.deposit(100);
account1.withdraw(10);

console.log(account1.balance);
