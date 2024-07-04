let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let scoreH = 0
let scoreG = 0


function add1() {
    scoreH += 1 
    scoreHome.textContent = scoreH
}

function add2() {
    scoreH += 2 
    scoreHome.textContent = scoreH
}

function add3() {
    scoreH += 3 
    scoreHome.textContent = scoreH
}

function add1Guest() {
    scoreG += 1 
    scoreGuest.textContent = scoreG
}

function add2Guest() {
    scoreG += 2 
    scoreGuest.textContent = scoreG
}

function add3Guest() {
    scoreG += 3 
    scoreGuest.textContent = scoreG
}