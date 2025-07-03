class BankAccount {
    private balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        console.log(`${this.balance}원`);
    }

    setBalance(amount: number) {
        amount *= 1.1;
        this.balance = amount;
    }
}

let account = new BankAccount();
account.deposit(3000);
account.setBalance(2000);
account.getBalance();