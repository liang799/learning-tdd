export class Franc {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number) {
        return new Franc(this.amount * multiplier)
    }

    equals(object) {
        return this.amount === object.amount;
    }
}
