let btn = document.getElementById("newQuote");
let quotes = document.querySelector('.quote');
let persons = document.querySelector('.person');
let juego = document.querySelector('.videogame');



const quotations = [{
    quote: "We all make choices but in the end our choices make us",
    person: "Andrew Ryan",
    game: "Bioshock"
},
{
    quote: "Sir, Finishing this fight",
    person: "Master chief",
    game: "Halo2"
},
{
    quote: "Get over here!",
    person: "Scorpion",
    game: "Mortal Kombat"
},
{
    quote: "Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind... are not the ones we intended",
    person: "Queen Myrrah",
    game: "Gears of war 2"
},
{
    quote: "Do a barrel roll!",
    person: "Peppy Hare",
    game: "Star fox 64"
},
]

let contador = 0
let currentGame = quotations[contador]

quotes.innerHTML = currentGame.quote;
persons.innerHTML = currentGame.person;
juego.innerHTML = currentGame.game;


function checkQuotes() {
    let redo = quotations.length -1
    
    if (contador == redo) {
        contador=0;
        quotes.innerHTML = quotations[contador].quote
        persons.innerHTML = quotations[contador].person
        juego.innerHTML = quotations[contador].game
    }
    else {
        contador++
        quotes.innerHTML = quotations[contador].quote
        persons.innerHTML = quotations[contador].person
        juego.innerHTML = quotations[contador].game

    }
}

