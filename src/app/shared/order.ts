import { Honey } from './honey';
import { Client } from 'src/app/shared/client';

export class Order {
    id: number;
    status: string;
    client: Client;
    products: Honey[];
    totalPrice = 0;
    payment: string;
    delivery: string;
    date: Date;
}
