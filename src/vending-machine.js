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

    returnChange(payment) {
        let change = []
        let total = 0
        let coins = [2, 1, 0.25, 0.10, 0.05]

        coins.forEach(coin => {
            while(total + coin <= payment) {
                change.push(coin)
                total += coin
            }
        })
        return change;
    }
}

module.exports = {
    VendingMachine,
}