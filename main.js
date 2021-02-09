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
        amount = Math.floor(amount)
        if (amount == 0) {return false}
        if (amount > this.coins) {amount = this.coins}
        this.bet = amount
        this.coins -= amount
        console.log(this.bet)
        return true
    }

    getResult() {
        if (this.reels.includes("bomb")) {
            console.log('bomb')
            return}
        else if (this.reels.every(e => e == "seven")) {
            console.log('all sevens!')
            this.coins += this.bet * 10
        }
        else if (this.reel3 == this.reel1 && this.reel1 == this.reel2) {
            this.coins += 3 * this.bet
        }
        else if (this.reels.includes("seven")) {
            this.coins += this.bet * this.reels.filter(e => e == "seven").length
        }
        else if ((this.reel1 == this.reel2) || this.reel1 == this.reel3 || this.reel2 == this.reel3) {
            this.coins += Math.floor(this.bet *.5)
        }
    }

    play(amount) {
        if (!this.placeBet(amount)) {
            console.log (this.placeBet(amount))
            return}
        this.pullLever()
        console.log(this)
        this.getResult()
        console.log(this)
        if (this.coins == 0) {alert('you lose')}
    }
    
}

let sm = new SlotMachine
sm.play(10)