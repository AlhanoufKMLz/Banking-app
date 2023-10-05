import { Customer } from "./customer";
export class Branch{
    name: string;
    customers: Customer[];

    constructor(name: string){
        this.name = name;
        this.customers = [];
    }

    getName():string{
        return this.name;
    }
    getCustomers():Customer[]{
        return this.customers;
    }
    addCustomer(customer: Customer):boolean{
        const foundCustomer = this.customers.find((item)=> item.getId() === customer.getId());
        if(!foundCustomer){
            this.customers.push(customer);
            return true;
        }
        return false;
    }
    addCustomerTransaction(customerId: number, amount: number):boolean{
        const foundCustomer = this.customers.find((item)=> item.getId() === customerId);
        if(foundCustomer){
            foundCustomer.addTransaction(amount);
            return true;
        } 
        return false;
    }
}