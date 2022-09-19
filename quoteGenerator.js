let btn = document.getElementById("newQuote");
let quotes = document.getElementById('quote');
let persons = document.querySelector('.person');
let juego = document.querySelector('.videogame');
let imagen = document.getElementById("png");



const quotations = [{
    quote: '"We all make choices but in the end our choices make us"',
    person: "Andrew Ryan",
    game: "Bioshock",
    limage: "/images_for_project/ryanfinal.png",
    background:"/images_for_project/wallpaperbackground.jpg"
},
{
    quote: '"Sir, Finishing this fight"',
    person: "Master chief",
    game: "Halo2",
    limage: "/images_for_project/jefe.png",
    background:"/images_for_project/halowallpaper.jpg"
},
{
    quote: '"Get over here!"',
    person: "Scorpion",
    game: "Mortal Kombat",
    limage: "/images_for_project/scorpion.png",
    background:"/images_for_project/mortallogo.JPG"
},
{
    quote: '"Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind... are not the ones we intended"',
    person: "Queen Myrrah",
    game: "Gears of war 2",
    limage: "/images_for_project/myrrah.png",
    background:"/images_for_project/brumal.JPG"
},
{
    quote: '"Do a barrel roll!"',
    person: "Peppy Hare",
    game: "Star fox 64",
    limage: "/images_for_project/peppy.png",
    background:"/images_for_project/greatfox.JPG"
},
]

let contador = 0
let currentGame = quotations[contador]

quotes.innerHTML = currentGame.quote;
persons.innerHTML = currentGame.person;
juego.innerHTML = currentGame.game;
imagen.innerHTML = currentGame.limage;




function checkQuotes() {

    let redo = quotations.length - 1

    if (contador == redo) {
        contador = 0;

        quotes.innerHTML = quotations[contador].quote
        persons.innerHTML = quotations[contador].person
        juego.innerHTML = quotations[contador].game
        imagen.src = quotations[contador].limage
        quotes.classList.remove('animate');
        persons.classList.remove('animate')
        juego.classList.remove('animate')
        imagen.classList.remove('animate');
        document.body.style.backgroundImage = `url(${quotations[contador].background})`;
        quotes.offsetWidth;
        quotes.classList.add('animate');
        persons.classList.add('animate');
        juego.classList.add('animate');
        imagen.classList.add('animate');


    }
    else {
        contador++
        
        quotes.innerHTML = quotations[contador].quote
        persons.innerHTML = quotations[contador].person
        juego.innerHTML = quotations[contador].game
        imagen.src = quotations[contador].limage
        quotes.classList.remove('animate');
        persons.classList.remove('animate')
        juego.classList.remove('animate')
        imagen.classList.remove('animate');
        document.body.style.backgroundImage = `url(${quotations[contador].background})`;
        quotes.offsetWidth;
        quotes.classList.add('animate');
        persons.classList.add('animate');
        juego.classList.add('animate');
        imagen.classList.add('animate');
        
    }

}

// const explmButton = document.getElementById('ExampleButton')

// explmButton.onclick = () => {
//     explmButton.classList.add('Animation')
// }
// explmButton.onanimationend = () => {
//     explmButton.classList.remove('Animation')
// }