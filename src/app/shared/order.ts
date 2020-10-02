import { Honey } from './honey';
import { Delivery } from './delivery';
import { Payment } from './payment';
import { Status } from './status';
import { Client } from './client';

export class Order {
    id: number;
    clientId: number;
    client: Client = new Client();
    orderedHoneys: Honey[];
    totalPrice: number;
    delivery: Delivery;
    payment: Payment;
    status: Status;
    date: Date;
}
