export class Order {

    private id: Number;
    private price: number;
    private foodName: String;
    private restaurantName: String;
    private paymentForm: String;

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
     * Getter $price
     * @return {number}
     */
	public get $price(): number {
		return this.price;
	}

    /**
     * Setter $price
     * @param {number} value
     */
	public set $price(value: number) {
		this.price = value;
	}

    /**
     * Getter $foodName
     * @return {String}
     */
	public get $foodName(): String {
		return this.foodName;
	}

    /**
     * Setter $foodName
     * @param {String} value
     */
	public set $foodName(value: String) {
		this.foodName = value;
	}
    
}