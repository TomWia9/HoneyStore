import { Honey } from './honey';
import { Payment } from './payment';

export interface Cart{
    id: number;
    honeys: Honey[];
    totalPrice: number;
    payment: Payment;
}