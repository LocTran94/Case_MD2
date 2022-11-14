export abstract class Phone {

    phoneID: number
    amount: number

    constructor(phoneID: number, amount: number) {
        this.phoneID = phoneID
        this.amount = amount


    }

}

export class Iphone extends Phone {
    name: string
    price: number
    date: number
    brand: string = 'Iphone'

    constructor(phoneID: number, amount: number, name: string, price: number, date: number) {
        super(phoneID, amount)
        this.price = price
        this.date = date
        this.name = name


    }
}


export class Samsung extends Phone {
    name: string
    price: number
    date: number
    brand: string = 'Samsung'

    constructor(phoneID: number, amount: number, name: string, price: number, date: number) {
        super(phoneID, amount)
        this.price = price
        this.date = date
        this.name = name


    }
}


export class Nokia extends Phone {
    name: string
    price: number
    date: number
    brand: string = 'Nokia'

    constructor(phoneID: number, amount: number, name: string, price: number, date: number) {
        super(phoneID, amount)
        this.price = price
        this.date = date
        this.name = name


    }
}
