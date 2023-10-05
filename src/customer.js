import { Transaction } from "./transaction.js";
export class Customer{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.transactions = [];
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getTransactions(){
        return this.transactions;
    }

    getBalance(){
        const balance = this.transactions.reduce((total, trans) => total + trans.amount, 0);
        if(balance < 0 ){
            return 'the balance is negative';
        }
        else return balance;
    }

    addTransaction(amount){
        this.transactions.push(new Transaction(amount, new Date()));
        return true;
    }
}