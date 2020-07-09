import { Honey } from './honey';
import { Delivery } from './delivery';
import { Payment } from './payment';
import { Status } from './status';

export class Order {
    id: number;
    clientId: number;
    orderedHoneys: Honey[];
    totalPrice: number;
    delivery: Delivery;
    payment: Payment;
    status: Status;
    date: Date;
}
