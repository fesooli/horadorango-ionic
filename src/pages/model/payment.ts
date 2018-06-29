import { Order } from "./order";

export class Payment {
    private id: Number;
    private orders: Array<Order>;
    private paymentForm: String;
    private date: Date;
    private deliveryAddress: String;
}