import { Customer } from './customer';

export class App {
    constructor() {
        this.heading = "Aureliajs Simple App Testing";
        this.customers = [];
    
        this.customerName = "";
        this.customerEmail = "";
    }

    addCustumer() {
        if(this.customerName && this.customerEmail) {
            this.customers.push(new Customer(this.customerName, this.customerEmail));

            // reset field
            this.customerName = "";
            this.customerEmail = "";
        }
    }

    removeCustumer(customer) {
        let index = this.customers.indexOf(customer);
        // console.log(index);
        if( index !== -1) {
            this.customers.splice(index, 1);
        }
    }
}