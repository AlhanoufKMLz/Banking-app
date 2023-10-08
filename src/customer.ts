import { Transaction } from "./transaction";
export class Customer{
    name: string;
    id: number;
    transactions: Transaction[];
    private balance: number;
    
    constructor(name: string, id:number){
        this.name = name;
        this.id = id;
        this.transactions = [];
        this.balance = 0;
    }

    getName():string{
        return this.name;
    }
    getId():number{
        return this.id;
    }
    getTransactions():Transaction[]{
        return this.transactions;
    }
    getBalance(): number{
        return this.balance;
        // const balance = this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
        // if(balance < 0){
        //     return 'the balance is negative';
        // }
        // return balance;
    }
    addTransaction(amount:number):boolean{
        if(amount + this.balance > 0){
            this.transactions.push(new Transaction(amount, new Date()));
            this.balance += amount;
            return true;
        }
        return false  
    }
}