class VendingMachine {
    constructor() {
    }

    printInventory(inventory) {
        var printed = inventory.map((treat) => {
            return {name: treat.name, quantity: treat.quantity}
        })
        return printed
    }

    refillInventory(inventory, num) {
        var stockedUp = inventory.map((treat) => {
            return {name: treat.name, quantity: treat.quantity + num}
        })
        // let stockedUp = inventory.reduce(function(acc, obj) {
        //     acc = {name: acc.name, quantity: acc.quantity}
        //     return acc
        // }, [])
        return stockedUp;
    }
    // arr.reduce((a, b) => ({x: a.x + b.x}))
        // Refill invnetory
        // re-supply change
        // dispense inventory based on payment
        // return change as coins ($0.35 is 1 quarter & 1 dime)
}

module.exports = {
    VendingMachine,
}