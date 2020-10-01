//shuffle all the cards onload
window.onload = function () {
    var mainDiv = $('#container');
    var divs = mainDiv.children();
    while (divs.length) {
        mainDiv.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

//Array of all the cards
var cards = document.querySelectorAll('.flip-card-front');
console.log(cards);
console.log(typeof cards);

//when the user clicks on the card rotate it 180deg
var displayCards = function (e) {
    if (e.target && e.target.matches('img')) {
        e.target.parentNode.parentNode.style.transform = 'rotateY(180deg)';
        cardOpen(e);
    }
}

var openedCards = [];

var moves = 0,
    limitedMoves = 80;

function cardOpen(e) {

    document.getElementById('number').textContent = limitedMoves--;
    console.log(limitedMoves);
    var activeCard = e.target.parentNode.parentNode.childNodes[3].childNodes[1].getAttribute('id');
    openedCards.push(activeCard);
    if (openedCards.length == 2) {
        if (openedCards[0].substring(0, openedCards[0].length - 1) !== openedCards[1].substring(0, openedCards[1].length - 1)) {
            unmatched();
        } else if (openedCards[0].substring(0, openedCards[0].length - 1) === openedCards[1].substring(0, openedCards[1].length - 1)) {
            matched();
            moves++;
            if (moves == 10) {
                playerRating();
                setTimeout(function () {
                    document.getElementById('container').style.visibility = 'hidden';
                }, 500)
                setTimeout(function () {
                    document.querySelector('.uwin').style.visibility = 'visible';
                    document.querySelector('.restart').style.visibility = 'visible';
                    document.querySelector('.rating').style.visibility = 'visible';
                    document.querySelector('.moves').style.visibility = 'hidden';
                }, 800);
                moves = 0;
                limitedMoves = 80;
            }
        }
    }
    runOutOfMoves();
};

//If the cards doesn't match then rotate it to 0deg 
function unmatched() {
    var cardUM1 = document.getElementById(openedCards[0]);
    var cardUM2 = document.getElementById(openedCards[1]);

    setTimeout(function () {
        cardUM1.parentNode.parentNode.style.transform = 'rotateY(0deg)';
        cardUM2.parentNode.parentNode.style.transform = 'rotateY(0deg)';
        openedCards = [];
    }, 650);

}

//If the cards matched make them disappear 
function matched() {
    var cardM1 = document.getElementById(openedCards[0]);
    var cardM2 = document.getElementById(openedCards[1]);

    setTimeout(function () {
        cardM1.parentNode.parentNode.style.visibility = 'hidden';
        cardM2.parentNode.parentNode.style.visibility = 'hidden';
        openedCards = [];
    }, 400);
}

//Player ratings based on how many moves user takes to win the game 
function playerRating() {
    var star = document.querySelector('.rating');
    if (limitedMoves >= 40) {
        star.childNodes[1].classList.add('checked');
        star.childNodes[3].classList.add('checked');
        star.childNodes[5].classList.add('checked');
    } else if (limitedMoves >= 20 && limitedMoves < 40) {
        star.childNodes[1].classList.add('checked');
        star.childNodes[3].classList.add('checked');
    } else if (limitedMoves < 20) {
        star.childNodes[1].classList.add('checked');
    }
}

//If user runs out of moves then display message and reset all the moves and limited moves
function runOutOfMoves() {
    if (limitedMoves == 0) {
        document.querySelector('#container').style.visibility = 'hidden';
        document.querySelector('.restart').style.visibility = 'visible';
        document.querySelector('.outofmoves').style.visibility = 'visible';
        document.querySelector('.moves').style.visibility = 'hidden';
        $('.flip-card-inner').css({
            'visibility': 'hidden',
        })
        limitedMoves = 80;
        moves = 0;
    }
}

//If user clicks on restart button reset everything
$(function () {
    $('.restart-button').click(function () {
        var mainDiv = $('#container');
        var divs = mainDiv.children();
        while (divs.length) {
            mainDiv.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
        document.querySelector('#container').style.visibility = 'visible';
        document.querySelector('.uwin').style.visibility = 'hidden';
        $('.flip-card-inner').css({
            'transform': 'rotateY(0deg)',
            'visibility': 'visible'
        });
        $('.restart').css('visibility', 'hidden');
        $('.rating').css('visibility', 'hidden');
        var star = document.querySelector('.rating');
        star.childNodes[1].classList.remove('checked');
        star.childNodes[3].classList.remove('checked');
        star.childNodes[5].classList.remove('checked');
        document.querySelector('.moves').style.visibility = 'visible';
        document.getElementById('number').textContent = '80';
        document.querySelector('.outofmoves').style.visibility = 'hidden';
    })
})

$('.flip-card-front').on('click', function (e) {
    if (e.target.parentNode.getAttribute('class') === 'flip-card-front') {
        displayCards(e);
    }
})