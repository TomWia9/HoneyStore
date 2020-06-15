import { Address } from './address';

export class Payment{
    delivery: string;
    paymentMethod: string;
    address: Address;

    constructor(address){
        this.address = address;
    }
}