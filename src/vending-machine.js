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
        return stockedUp;
    }

    resupplyChange(coins, num) {
        function moreCoins(value) {
            return value.quantity < 5
        }
        var newCoins = coins.filter(moreCoins)
        return newCoins.map((coin) => {
            return {name: coin.name, quantity: coin.quantity + num}
        })
    }

    dispenseItem(items, payment) {
        const buyThis = items.filter(item => {
            if ( item.price < payment ) {
                return item
            }
        })
        return buyThis;
    }
        // dispense inventory based on payment
        // return change as coins ($0.35 is 1 quarter & 1 dime)
}

module.exports = {
    VendingMachine,
}