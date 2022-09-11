let player = {
    name: "Wild Seven",
    chips: 1000
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let youWin = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let dealerCards = []
let dealerSum = 0
let dealerCardsEl = document.getElementById("dealercards-el")
let dealerSumEl = document.getElementById("dealersum-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let thirdCard = getRandomCard()
    let fourthCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    dealerCards = [thirdCard, fourthCard]
    dealerSum = thirdCard + fourthCard
    renderGame()
}

function renderGame() {
    dealerCardsEl.textContent = "Dealer Cards: "
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardsEl.textContent += dealerCards[i] + " "
    }
    dealerSumEl.textContent = "Dealer Sum: " + dealerSum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (dealerSum === 21) {
        message = "You Lose!"
        isAlive = false
    } else if (dealerSum > 21) {
        message = "You Win!"
        isAlive = false
    } else if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function renderDealer() {
    dealerCardsEl.textContent = "Dealer Cards: "
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardsEl.textContent += dealerCards[i] + " "
    }
    dealerSumEl.textContent = "Dealer Sum: " + dealerSum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (dealerSum === 21) {
        message = "You Lose!"
        isAlive = false
    } else if (dealerSum > 21) {
        message = "You Win!"
        youWin = true
    } else if (dealerSum > sum) {
        if (dealerSum < 21)
        message = "You Lose!"
        isAlive = false
    } else if (sum === dealerSum) {
        message = "Draw"
        isAlive = false
    } else if (sum > dealerSum) {
        message = "You Win!"
        isAlive = false    
    } else if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function stand() {
    if (isAlive === true && hasBlackJack === false && dealerSum < 17) { 
        let card = getRandomCard()
        dealerSum += card
        dealerCards.push(card)
        renderDealer()    
    } else if (dealerSum === 17) {
        renderDealer()
    } else if (dealerSum > 17) {
        renderDealer()
    }
}
