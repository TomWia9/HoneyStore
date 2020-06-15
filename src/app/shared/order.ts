import { Honey } from './honey';
import { Client } from 'src/app/shared/client';
import { Payment } from './payment';

export class Order {
    id: number;
    status: string;
    client: Client;
    products: Honey[];
    totalPrice = 0;
    payment: Payment;
    date: string;
}
