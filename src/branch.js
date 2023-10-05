export class Branch{
    constructor(name){
        this.name = name;
        this.customers = [];
    }

    getName(){
        return(this.name);
    }
    getCustomers(){
        return(this.customers);
    }
    addCustomer(customer){
        const foundCustomer = this.customers.find((item)=> item.getId() === customer.getId());
        if(!foundCustomer){
            this.customers.push(customer);
            return true;
        }
        else return false;
    }
    addCustomerTransaction(customerId, amount){
        const foundCustomer = this.customers.find((item)=> item.getId() === customerId);
        if(foundCustomer){
            foundCustomer.addTransaction(amount);
            return true;
        } else return false;
    }
}