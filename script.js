
// Poäng
let score = 0;

// Hur många poäng man får per klick
let power = 1;

// Pris för uppgradering
let cost = 10;


// Hämta saker från HTML
let scoreText = document.getElementById("score");
let powerText = document.getElementById("power");
let costText = document.getElementById("cost");

let clickButton = document.getElementById("clickButton");
let upgradeButton = document.getElementById("upgradeButton");
let resetButton = document.getElementById("resetButton");


// KLICKA PÅ STORA KNAPPEN
clickButton.onclick = function() {

    score = score + power;

    scoreText.innerText = score;

};


// KÖP UPPGRADERING
upgradeButton.onclick = function() {

    if (score >= cost) {

        score = score - cost;

        power = power + 1;

        cost = cost + 10;

        scoreText.innerText = score;
        powerText.innerText = power;
        costText.innerText = cost;

    } else {

        alert("Du behöver fler poäng!");

    }

};


// ÅTERSTÄLL
resetButton.onclick = function() {

    score = 0;
    power = 1;
    cost = 10;

    scoreText.innerText = score;
    powerText.innerText = power;
    costText.innerText = cost;

};
