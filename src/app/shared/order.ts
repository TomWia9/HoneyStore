import { Honey } from './honey';
import { Client } from 'src/app/shared/client';

export interface Order {
    id: number;
    status: string;
    client: Client;
    products: Honey[];
    // amount: number; (products.length)
    totalCost: number;
    delivery: string;
    payment: string;
    date: string;
}
