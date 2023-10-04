export class Customer{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.transactions = [];
    }
    getName(){
        return(this.name);
    }
    getId(){
        return(this.id);
    }
    getTransactions(){
        return(this.transactions);
    }
    getBalance(){
        const balance = this.transactions.reduce((amount1, amount2) => amount1+amount2);
        if(balance < 0 ){
            return 0;
        }
        else return balance;
        
    }
    addTransaction(amount){
        this.transactions.push(amount);
        return true;
    }

}