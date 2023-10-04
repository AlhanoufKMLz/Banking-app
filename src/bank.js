export class Bank{
    constructor(name){
        this.name = name;
        this.branches = []
    }

    addBranch(branch){
        const foundBranch = this.branches.find((bran)=> bran.getName() === branch.getName());
        if(!foundBranch){
            this.branches.push(branch);
            return true;
        }
        else return false;
    }

    addCustomer(branch, customer){
        const foundBranch = this.branches.find((bran)=> bran.getName() === branch.getName());
        if(foundBranch){
            foundBranch.addCustomer();
            return true;
        }
        else return false;
    }

    addCustomerTransaction(branch, customerId, amount){
        const foundBranch = this.branches.find((bran)=> bran.getName() === branch.getName());
        if(foundBranch){
            foundBranch.addCustomerTransaction(customerId, amount);
            return true;
        }
        else return false;
    }

    findBranchByName(branchName){
        return this.customers.find((bran)=> bran.getName() === branchName) || null;
    }

    checkBranch(branch){
        return this.customers.find((bran)=> bran.getName() === branchName) ? true : false;
    }

    listCustomers(branch, includeTransactions){
        if(includeTransactions){
            if(this.checkBranch(branch)){
                const branchCustomers = branch.getCustomers();
                branchCustomers.forEach(customer => {
                    console.log('Name:',customer.getName());
                    console.log('ID:',customer.getId());
                    const customerTransaction = customer.getTransactions()
                    customerTransaction.forEach((transaction) =>{
                        console.log('Amount:', transaction.amount, ' ,Date:', transaction.date);
                    });
                });
            }
        }
    }

}