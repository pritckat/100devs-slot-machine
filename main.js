class SlotMachine {
    constructor() {
        this.reel1 = ""
        this.reel2 = ""
        this.reel3 = ""
        this.coins = 100
    }

    static get reelOptions() {
        return ['cherry', 'bomb', 'seven', 'star', 'coin']
    }

    pullLever() {
        let options = SlotMachine.reelOptions
        this.reel1 = options[Math.floor(Math.random() * 5)]
        this.reel2 = options[Math.floor(Math.random() * 5)]
        this.reel3 = options[Math.floor(Math.random() * 5)]
    }

    placeBet(amount) {
        this.coins -= amount
    }
}

let sm = new SlotMachine
sm.pullLever()
console.log(sm.reel1, sm.reel2, sm.reel3)