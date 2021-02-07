class SlotMachine {
    constructor() {
        this.reel1 = ""
        this.reel2 = ""
        this.reel3 = ""
        this.coins = 100
        this.bet = 0
    }

    get reels() {
        return [this.reel1, this.reel2, this.reel3]
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
        this.bet = amount
        this.coins -= amount
    }

    getResult() {
        if (this.reels.includes("bomb")) {return}
        else if (this.reels.every(e => e == "seven")) {
            this.coins += this.bet * 10
        }
        else if (this.reel3 == this.reel1 && this.reel1 == this.reel2) {
            this.coins += 3 * this.bet
        }
        else if (this.reels.includes("seven")) {
            this.coins += this.bet * this.reels.filter(e => e == "seven").length
        }
    }

    play() {
        
    }
    
}

let sm = new SlotMachine
console.log(sm)
sm.bet = 10
sm.reel3 = 'seven'
console.log(sm)
sm.getResult()
console.log(sm)
sm.reel2 = 'seven'
sm.getResult()
console.log(sm)
sm.reel1 = 'bomb'
sm.getResult()
console.log(sm)