let sumH = document.getElementById("sum-H")
let sumG = document.getElementById("sum-G")
let scoreH = 0
let scoreG = 0

function incrementHome1(){
    scoreH += 1
    sumH.textContent=scoreH
} 

function incrementHome2(){
    scoreH += 2
    sumH.textContent=scoreH
}

function incrementHome3(){
    scoreH += 3
    sumH.textContent=scoreH
}

function incrementGuest1(){
    scoreG += 1
    sumG.textContent=scoreG
}
function incrementGuest2(){
    scoreG += 2
    sumG.textContent=scoreG
}
function incrementGuest3(){
    scoreG += 3
    sumG.textContent=scoreG
}

