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
            return foundBranch.addCustomer(customer);
        }
        return false;
    }
    addCustomerTransaction(branch: Branch, customerId: number, amount: number):boolean{
        const foundBranch = this.branches.find((item)=> item.getName() === branch.getName());
        if(foundBranch){
            return foundBranch.addCustomerTransaction(customerId, amount);
        }
        return false;
    }
    findBranchByName(branchName: string):Branch[] | null{
        return this.branches.filter((item)=> item.getName() === branchName) || null;
    }
    checkBranch(branch: Branch){
        return this.branches.some(item => item.getName() === branch.getName());  
    }
    listCustomers(branch: Branch, includeTransactions: boolean){
        if(this.checkBranch(branch)){
            branch.getCustomers().forEach(customer => {
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
    findCustomerById(cutomerId: number): Customer|string {
        let customerFound;
        this.branches.forEach(branch => {
            customerFound = branch.getCustomers().find((customer) => customer.getId() === cutomerId)   
        });
        if (customerFound)
            return customerFound;
        return `there is no user with the ID ${cutomerId}`
    }
    findCustomerByName(cutomerName: string): Customer|string {
        let customerFound;
        this.branches.forEach(branch => {
            customerFound = branch.getCustomers().find((customer) => customer.getName() === cutomerName)   
        });
        if (customerFound)
            return customerFound;
        return `there is no user with the name ${cutomerName}`
    }
}


