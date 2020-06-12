import { Honey } from './honey';
import { Client } from 'src/app/shared/client';

export class Order {
    id: number;
    status: string;
    client: Client;
    products: Honey[];
    // amount: number; (products.length)
    totalCost = 0;
    delivery: string;
    payment: string;
    date: string;
}
