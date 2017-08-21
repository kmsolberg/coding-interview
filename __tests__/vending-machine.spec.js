const { VendingMachine } = require('../src/vending-machine');
const vendingMachine = new VendingMachine;

const treats = [
    {
        name: "snickers",
        quantity: 3,
        price: 1.25
    },
    {
        name: "chips",
        quantity: 8,
        price: 0.65
    },
    {
        name: "oreos",
        quantity: 1,
        price: 1.75
    }
]

const coins = [
    {
        name: 'twoonie',
        value: 2,
        quantity: 3
    },
    {
        name: 'loonie',
        value: 1,
        quantity: 7
    },
    {
        name: 'quarter',
        value: 0.25,
        quantity: 14
    },
    {
        name: 'dime',
        value: 0.10,
        quantity: 18
    },
    {
        name: 'nickle',
        value: 0.05,
        quantity: 32
    },
]

describe('printInventory', () => {
    it('should print the name & quantity of each product', () => {
        const received = vendingMachine.printInventory(treats)
        const expected = [
            {
                name: "snickers",
                quantity: 3,
            },
            {
                name: "chips",
                quantity: 8,
            },
            {
                name: "oreos",
                quantity: 1,
            }
        ]
        expect(received).toEqual(expected)
    })
})

describe('refillInventory', () => {
    it('should increase the quantity of a product by X amount', () => {
        const received = vendingMachine.refillInventory(treats, 10)
        const expected = [{
            name: "snickers",
            quantity: 13,
        },
        {
            name: "chips",
            quantity: 18,
        },
        {
            name: "oreos",
            quantity: 11,
        }]
        expect(received).toEqual(expected)
    })
    xit('should not make the quantity of any item larger than 20', () => {
        const received = vendingMachine.refillInventory(treats, 15)
        const expected = [{
            name: "snickers",
            quantity: 13,
        },
        {
            name: "chips",
            quantity: 18,
        },
        {
            name: "oreos",
            quantity: 11,
        }]
    })
})

describe('resupplyChange', () => {
    it('should increase the quantity of coins by X amount', () => {
        received = vendingMachine.resupplyChange(coins, 10)
        expected = [
            {name: 'twoonie', quantity: 13 },
        ]
        expect(received).toEqual(expected)
    })

    it('should only restock coins with less than 5 in stock', () => {
        received = vendingMachine.resupplyChange(coins, 15)
        expected = [
            {name: 'twoonie', quantity: 18 },
            {name: 'loonie', quantity: 23 },
            {name: 'quarter', quantity: 29 },
            {name: 'dime', quantity: 33 },
            {name: 'nickel', quantity: 47 },
        ]
        expect(received).not.toBe(expected)
    })
})

describe('dispenseItem', () => {
    it('should dispense an item whose price is less than payment', () => {
        received = vendingMachine.dispenseItem(treats, 1)
        expected = [{name: "chips", quantity: 8, price: 0.65}]
        expect(received).toEqual(expected)
    })
    // it('should return the difference between the price and cost', () => {
    //     received = vendingMachine.dispenseItem(treats, 1)
    //     expected = [{name: "chips", quantity: 8, price: 0.65}]
    //     expect(received).toEqual(expected)
    // })
})

describe('returnChange', () => {
    it('should return an amount in coins', () => {
        received = vendingMachine.returnChange(1.35)
        expected = [1, 0.25, 0.10]
        expect(received).toEqual(expected)
    })
})