var score = 0;
var clickingPower = 1;
var mascots = 0;
var mascotCost = 50;
var scorePerSecond = 0;
var actors = 0;
var actorCost = 270;
var refrences = 0;
var refrenceCost = 7560;
var ads = 0;
var adCost = 186000;
var candys = 0;
var candyCost = 2200000;
var scams = 0;
var scamCost = 43000000;
var hacks = 0;
var hackCost = 540000000;
var helis = 0;
var heliCost = 7600000000;
var dominations = 0;
var dominationCost = 100000000000;
var multiplier = 1;
var car = false;
var home = false;
var health = false;
var earnings = 0;

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function buyMascot() {
    if (score >= mascotCost) {
        score = score - mascotCost;
        mascots = mascots + 1;
        mascotCost = Math.round(mascotCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("mascots").innerHTML = mascots;
        document.getElementById("mascotcost").innerHTML = mascotCost;
        updateScorePerSecond();
    }
}

function buyActor() {
    if (score >= actorCost) {
        score = score - actorCost;
        actors = actors + 1;
        actorCost = Math.round(actorCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("actors").innerHTML = actors;
        document.getElementById("actorcost").innerHTML = actorCost;
        updateScorePerSecond();
    }
}

function buyRefrence() {
    if (score >= refrenceCost) {
        score = score - refrenceCost;
        refrences = refrences + 1;
        refrenceCost = Math.round(refrenceCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("refrences").innerHTML = refrences;
        document.getElementById("refrencecost").innerHTML = refrenceCost;
        updateScorePerSecond();
    }
}

function buyAd() {
    if (score >= adCost) {
        score = score - adCost;
        ads = ads + 1;
        adCost = Math.round(adCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("ads").innerHTML = ads;
        document.getElementById("adcost").innerHTML = adCost;
        updateScorePerSecond();
    }
}

function buyCandy() {
    if (score >= candyCost) {
        score = score - candyCost;
        candys = candys + 1;
        candyCost = Math.round(candyCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("candys").innerHTML = candys;
        document.getElementById("candycost").innerHTML = candyCost;
        updateScorePerSecond();
    }
}

function buyScam() {
    if (score >= scamCost) {
        score = score - scamCost;
        scams = scams + 1;
        scamCost = Math.round(scamCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("scams").innerHTML = scams;
        document.getElementById("scamcost").innerHTML = scamCost;
        updateScorePerSecond();
    }
}

function buyHack() {
    if (score >= hackCost) {
        score = score - hackCost;
        hacks = hacks + 1;
        hackCost = Math.round(hackCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("hacks").innerHTML = hacks;
        document.getElementById("hackcost").innerHTML = hackCost;
        updateScorePerSecond();
    }
}

function buyHeli() {
    if (score >= heliCost) {
        score = score - heliCost;
        helis = helis + 1;
        heliCost = Math.round(heliCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("helis").innerHTML = helis;
        document.getElementById("helicost").innerHTML = heliCost;
        updateScorePerSecond();
    }
}

function buyDomination() {
    if (score >= dominationCost) {
        score = score - dominationCost;
        dominations = dominations + 1;
        dominationCost = Math.round(dominationCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("dominations").innerHTML = dominations;
        document.getElementById("dominationcost").innerHTML = dominationCost;
        updateScorePerSecond();
    }
}

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== "undefined") score = savedGame.score;
    if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
    if (typeof savedGame.mascots !== "undefined") mascots = savedGame.mascots;
    if (typeof savedGame.mascotCost !== "undefined") mascotCost = savedGame.mascotCost;
    if (typeof savedGame.actors !== "undefined") actors = savedGame.actors;
    if (typeof savedGame.actorCost !== "undefined") actorCost = savedGame.actorCost;
    if (typeof savedGame.refrences !== "undefined") refrences = savedGame.refrences;
    if (typeof savedGame.refrenceCost !== "undefined") refrenceCost = savedGame.refrenceCost;
    if (typeof savedGame.ads !== "undefined") ads = savedGame.ads;
    if (typeof savedGame.adCost !== "undefined") adCost = savedGame.adCost;
    if (typeof savedGame.candys !== "undefined") candys = savedGame.candys;
    if (typeof savedGame.candyCost !== "undefined") candyCost = savedGame.candyCost;
    if (typeof savedGame.scams !== "undefined") scams = savedGame.scams;
    if (typeof savedGame.scamCost !== "undefined") scamCost = savedGame.scamCost;
    if (typeof savedGame.hacks !== "undefined") hacks = savedGame.hacks;
    if (typeof savedGame.hackCost !== "undefined") hackCost = savedGame.hackCost;
    if (typeof savedGame.helis !== "undefined") helis = savedGame.helis;
    if (typeof savedGame.heliCost !== "undefined") heliCost = savedGame.heliCost;
    if (typeof savedGame.dominations !== "undefined") dominations = savedGame.dominations;
    if (typeof savedGame.dominationCost !== "undefined") dominationCost = savedGame.dominationCost;
    if (typeof savedGame.multiplier !== "undefined") multiplier = savedGame.multiplier;
    if (typeof savedGame.car !== "undefined") car = savedGame.car;
    if (typeof savedGame.earnings !== "undefined") earnings = savedGame.earnings;
}

function saveGame() {
    var gameSave = {
        score: score,
        clickingPower: clickingPower,
        mascots: mascots,
        mascotCost: mascotCost,
        actors: actors,
        actorCost: actorCost,
        refrences: refrences,
        refrenceCost: refrenceCost,
        ads: ads,
        adCost: adCost,
        candys: candys,
        candyCost: candyCost,
        scams: scams,
        scamCost: scamCost,
        hacks: hacks,
        hackCost: hackCost,
        helis: helis,
        heliCost: heliCost,
        dominations: dominations,
        dominationCost: dominationCost,
        multiplier: multiplier,
        car: car,
        earnings: earnings
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame() {
    if (confirm("Are you sure you want to reset your game?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

window.onload = function() {
    loadGame();
    updateScorePerSecond();
    document.getElementById("score").innerHTML = score;
    document.getElementById("mascots").innerHTML = mascots;
    document.getElementById("mascotcost").innerHTML = mascotCost;
    document.getElementById("actors").innerHTML = actors;
    document.getElementById("actorcost").innerHTML = actorCost;
    document.getElementById("refrences").innerHTML = refrences;
    document.getElementById("refrencecost").innerHTML = refrenceCost;
    document.getElementById("ads").innerHTML = ads;
    document.getElementById("adcost").innerHTML = adCost;
    document.getElementById("candys").innerHTML = candyCost;
    document.getElementById("scams").innerHTML = scams;
    document.getElementById("scamcost").innerHTML = scamCost;
    document.getElementById("hacks").innerHTML = hacks;
    document.getElementById("hackcost").innerHTML = hackCost;
    document.getElementById("helis").innerHTML = helis;
    document.getElementById("helicost").innerHTML = heliCost;
    document.getElementById("dominations").innerHTML = dominations;
    document.getElementById("dominationcost").innerHTML = dominationCost;
};

function getCar() {
    if (car == false && score >= 1000000000000) {
        car = true;
        score = score - 1000000000000;
        multiplier = 2;
        clickingPower = 2;
        carReset();
    }
}

function getHome() {
    if (home == false && score >= 10000000000000000) {
        home = true;
        score = score - 10000000000000000;
        homeReset();
    }
}

function getHealth() {
    if (health == false && score >= 100000000000000000000) {
        health = true;
        score = score - 100000000000000000000;
        multiplier = 3;
        clickingPower = 3;
        carReset();
    }
}

function carReset() {
    score = 0;
    mascots = 0;
    mascotCost = 50;
    scorePerSecond = 0;
    actors = 0;
    actorCost = 270;
    refrences = 0;
    refrenceCost = 7560;
    ads = 0;
    adCost = 186000;
    candys = 0;
    candyCost = 2200000;
    scams = 0;
    scamCost = 43000000;
    hacks = 0;
    hackCost = 540000000;
    helis = 0;
    heliCost = 7600000000;
    dominations = 0;
    dominationCost = 100000000000;
}

function homeReset() {
    score = 0;
    mascots = 0;
    mascotCost = 25;
    scorePerSecond = 0;
    actors = 0;
    actorCost = 135;
    refrences = 0;
    refrenceCost = 3780;
    ads = 0;
    adCost = 93000;
    candys = 0;
    candyCost = 1100000;
    scams = 0;
    scamCost = 21500000;
    hacks = 0;
    hackCost = 270000000;
    helis = 0;
    heliCost = 3800000000;
    dominations = 0;
    dominationCost = 50000000000;
}

function updateScorePerSecond() {
    scorePerSecond = (mascots + actors * 3 + refrences * 56 + ads * 294 + candys * 1700 + scams * 12300 + hacks * 67000 + helis * 1960000 + dominations * 25000000) * multiplier;
    document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}

setInterval(function(){ 
    earnings = (mascots + actors * 3 + refrences * 56 + ads * 294 + candys * 1700 + scams * 12300 + hacks * 67000 + helis * 1960000 + dominations * 25000000) * multiplier;
    score = score + earnings;
    document.getElementById("score").innerHTML = score;
}, 1000);

setInterval(function() {
    saveGame();
}, 30000);

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        saveGame();
    }
}, false);
