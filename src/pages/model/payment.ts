import { Order } from "./order";

export class Payment {
    private id: Number;
    private orders: String;
    private paymentForm: String;
    private date: Date;
    private deliveryAddress: String;

    /**
     * Getter $localName
     * @return {String}
     */
	public get $localName(): String {
		return this.localName;
	}

    /**
     * Setter $localName
     * @param {String} value
     */
	public set $localName(value: String) {
		this.localName = value;
	}
    private localName: String;

    /**
     * Getter $totalPrice
     * @return {number}
     */
	public get $totalPrice(): number {
		return this.totalPrice;
	}

    /**
     * Setter $totalPrice
     * @param {number} value
     */
	public set $totalPrice(value: number) {
		this.totalPrice = value;
	}
    private totalPrice: number;

    /**
     * Getter $id
     * @return {Number}
     */
	public get $id(): Number {
		return this.id;
	}

    /**
     * Setter $id
     * @param {Number} value
     */
	public set $id(value: Number) {
		this.id = value;
    }
    
    /**
     * Getter $orders
     * @return {String}
     */
	public get $orders(): String {
		return this.orders;
	}

    /**
     * Setter $orders
     * @param {String} value
     */
	public set $orders(value: String) {
		this.orders = value;
	}

    /**
     * Getter $paymentForm
     * @return {String}
     */
	public get $paymentForm(): String {
		return this.paymentForm;
	}

    /**
     * Setter $paymentForm
     * @param {String} value
     */
	public set $paymentForm(value: String) {
		this.paymentForm = value;
	}

    /**
     * Getter $date
     * @return {Date}
     */
	public get $date(): Date {
		return this.date;
	}

    /**
     * Setter $date
     * @param {Date} value
     */
	public set $date(value: Date) {
		this.date = value;
	}

    /**
     * Getter $deliveryAddress
     * @return {String}
     */
	public get $deliveryAddress(): String {
		return this.deliveryAddress;
	}

    /**
     * Setter $deliveryAddress
     * @param {String} value
     */
	public set $deliveryAddress(value: String) {
		this.deliveryAddress = value;
	}
    
}