import { Customer } from "./customer";
import { Branch } from "./branch";
export class Bank{
    name: string;
    branches: Branch[];

    constructor(name: string){
        this.name = name;
        this.branches = []
    }

    addBranch(branch: Branch):boolean{
        const foundBranch = this.branches.find((item)=> item.getName() === branch.getName());
        if(!foundBranch){
            this.branches.push(branch);
            return true;
        }
        return false;
    }
    addCustomer(branch: Branch, customer: Customer):boolean{
        const foundBranch = this.branches.find((item)=> item.getName() === branch.getName());
        if(foundBranch){
            foundBranch.addCustomer(customer);
            return true;
        }
        return false;
    }
    addCustomerTransaction(branch: Branch, customerId: number, amount: number):boolean{
        const foundBranch = this.branches.find((item)=> item.getName() === branch.getName());
        if(foundBranch){
            foundBranch.addCustomerTransaction(customerId, amount);
            return true;
        }
        return false;
    }
    findBranchByName(branchName: string){
        return this.branches.find((item)=> item.getName() === branchName) || null;
    }
    checkBranch(branch: Branch){
        return this.branches.some(item => item.getName() === branch.getName());  
    }
    listCustomers(branch: Branch, includeTransactions: boolean){
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


