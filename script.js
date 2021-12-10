var score = 0;
var clickingPower = 1;
var mascots = 0;
var mascotCost = 50;
var scorePerSecond = 0;
var actors = 0;
var actorCost = 540;
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

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function buyMascot() {
    if (score >= mascotCost) {
        score = score - mascotCost;
        mascots = mascots + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("mascots").innerHTML = mascots;
        document.getElementById("mascotcost").innerHTML = mascotCost;
    }
}

function buyActor() {
    if (score >= actorCost) {
        score = score - actorCost;
        actors = actors + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("actors").innerHTML = actors;
        document.getElementById("actorcost").innerHTML = actorCost;
    }
}

function buyRefrence() {
    if (score >= refrenceCost) {
        score = score - refrenceCost;
        refrences = refrences + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("refrences").innerHTML = refrences;
        document.getElementById("refrencecost").innerHTML = refrenceCost;
    }
}

function buyAd() {
    if (score >= adCost) {
        score = score - adCost;
        ads = ads + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("ads").innerHTML = ads;
        document.getElementById("adcost").innerHTML = adCost;
    }
}

function buyCandy() {
    if (score >= candyCost) {
        score = score - candyCost;
        candys = candys + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("candys").innerHTML = candys;
        document.getElementById("candycost").innerHTML = candyCost;
    }
}

function buyScam() {
    if (score >= scamCost) {
        score = score - scamCost;
        scams = scams + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("scams").innerHTML = scams;
        document.getElementById("scamcost").innerHTML = scamCost;
    }
}

function buyHack() {
    if (score >= hackCost) {
        score = score - hackCost;
        hacks = hacks + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("hacks").innerHTML = hacks;
        document.getElementById("hackcost").innerHTML = hackCost;
    }
}

function buyHeli() {
    if (score >= heliCost) {
        score = score - heliCost;
        helis = helis + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("helis").innerHTML = helis;
        document.getElementById("helicost").innerHTML = heliCost;
    }
}

function buyDomination() {
    if (score >= dominationCost) {
        score = score - dominationCost;
        dominations = dominations + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("dominations").innerHTML = dominations;
        document.getElementById("dominationcost").innerHTML = dominationCost;
    }
}

setInterval(function(){ 
    score = score + mascots + actors * 3 + refrences * 56 + ads * 294 + candys * 1700 + scams * 12300 + hacks * 67000 + helis * 1960000 + dominations * 25000000;
    scorePerSecond = mascots + actors * 3 + refrences * 56 + ads * 294 + candys * 1700 + scams * 12300 + hacks * 67000 + helis * 1960000 + dominations * 25000000;
    document.getElementById("score").innerHTML = score;
    document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}, 1000);