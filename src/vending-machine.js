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
            if (treat.quantity + num > 20) {
                return {name: treat.name, quantity: treat.quantity}
            } else {
                return {name: treat.name, quantity: treat.quantity + num}
            }
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
        const buyThis = items.find(item => {
            if ( item.price < payment ) {
                return item
            }
        })
        if(!buyThis) {
            return 'Not enough money!'
        } else {
            return buyThis
        }
    }

    returnChange(payment) {
        let change = []
        let total = 0
        let coins = [
                        { name: 'twoonie', value: 2, quantity: 3 },
                        { name: 'loonie', value: 1, quantity: 7 },
                        { name: 'quarter', value: 0.25, quantity: 14 },
                        { name: 'dime', value: 0.10, quantity: 18 },
                        { name: 'nickle', value: 0.05, quantity: 32 },
                    ]

        if(!payment) {
            return 'No change for you!'
        } else {
            coins.map(coin => {
                while(total + coin.value <= payment) {
                    change.push(coin.name)
                    total += coin.value
                }
            })
            return change.reduce((prev, curr) => {
                prev[curr] = (prev[curr] || 0) +1;
                return prev
            }, {})
        }
    }
}

module.exports = {
    VendingMachine,
}