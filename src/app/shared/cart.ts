import { Honey } from './honey';
import { Payment } from './payment';

export class Cart{
    id: number;
    honeys: Honey[];
    totalPrice: number;
    payment: Payment;
}