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

describe('printInventory', () => {
    it('should print the name & quantity of each product', () => {
        const expected = vendingMachine.printInventory(treats)
        const received = [
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
        const expected = vendingMachine.refillInventory(treats, 10)
        const received = [{
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
    it('should not make the quantity of any item larger than 20', () => {
        const expected = refillInventory(10)
        const received = [ {snickers: 13}, {chips: 18}, {oreos: 11}]
        expect(received).toBe(expected)
    })
})
xdescribe('resupplyChange', () => {
    it('should increase the quantity of a product by X amount', () => {
        expect(received).toBe(expected)
    })
})