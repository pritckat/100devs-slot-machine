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
        return ['cherry', 'lemon', 'seven', 'bar', 'diamond']
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
        if (this.reels.includes("lemon")) {
            return}
        else if (this.reels.every(e => e == "seven")) {
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
        if (!this.placeBet(amount)) {return}
        this.pullLever()
        this.getResult()
        if (this.diamonds == 0) {alert('you lose')}
    }
}

function assignPic(reel) {
    switch (reel) {
        case 'cherry':
            return 'images/cherry.png'
        case 'bar':
            return 'images/bar.png'
        case 'diamond':
            return 'images/diamond.png'
        case 'lemon':
            return 'images/lemon.png'
        case 'seven':
            return 'images/seven.png'
    }
}
let sm = new SlotMachine
sm.play(10)
const reel1 = document.querySelector("#reel1")
const reel2 = document.querySelector("#reel2")
const reel3 = document.querySelector("#reel3")
reel1.src = assignPic(sm.reel1)
reel2.src = assignPic(sm.reel2)
reel3.src = assignPic(sm.reel3)