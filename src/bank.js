import { Customer } from "./customer.js";
import { Branch } from "./branch.js";
export class Bank{
    constructor(name){
        this.name = name;
        this.branches = []
    }

    addBranch(branch){
        const foundBranch = this.branches.find((item)=> item.getName() === branch.getName());
        if(!foundBranch){
            this.branches.push(branch);
            return true;
        }
        else return false;
    }
    addCustomer(branch, customer){
        const foundBranch = this.branches.find((item)=> item.getName() === branch.getName());
        if(foundBranch){
            foundBranch.addCustomer(customer);
            return true;
        }
        else return false;
    }
    addCustomerTransaction(branch, customerId, amount){
        const foundBranch = this.branches.find((item)=> item.getName() === branch.getName());
        if(foundBranch){
            foundBranch.addCustomerTransaction(customerId, amount);
            return true;
        }
        else return false;
    }
    findBranchByName(branchName){
        return this.branches.find((item)=> item.getName() === branchName) || null;
    }
    checkBranch(branch){
        return this.branches.some(item => item.getName() === branch.getName());  
    }
    listCustomers(branch, includeTransactions){
        if(this.checkBranch(branch)){
            const branchCustomers = branch.getCustomers();
            branchCustomers.forEach(customer => {
                console.log('Name:',customer.getName(),'ID:',customer.getId());
                if(includeTransactions){
                    const customerTransaction = customer.getTransactions()
                    customerTransaction.forEach((transaction) =>{
                        console.log('Amount:', transaction.amount, ' ,Date:', transaction.date);
                    });
                }
            });
        }
    }
}


const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", 1)
const customer2 = new Customer("Anna", 2)
const customer3 = new Customer("John", 3)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch) 

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)

customer1.addTransaction(-1000)
console.log(customer1.getBalance())
arizonaBank.listCustomers(westBranch, true)
arizonaBank.listCustomers(sunBranch,true)

