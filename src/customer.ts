import { Transaction } from "./transaction";
export class Customer{
    name: string;
    id: number;
    transactions: Transaction[];
    
    constructor(name: string, id:number){
        this.name = name;
        this.id = id;
        this.transactions = [];
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
    getBalance(){
        const balance = this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
        if(balance < 0 ){
            return 'the balance is negative';
        }
        return balance;
    }
    addTransaction(amount:number):boolean{
        this.transactions.push(new Transaction(amount, new Date()));
        return true;
    }
}