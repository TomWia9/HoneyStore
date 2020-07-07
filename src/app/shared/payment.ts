import { Address } from './address';

export class Payment{
    delivery: string;
    paymentMethod: string;
    address: Address;

    constructor(address: Address) {
        this.address = address;
    }
}