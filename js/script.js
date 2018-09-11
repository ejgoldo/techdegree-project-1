// FSJS - Random Quote Generator

//auto-refresh code for getting a new quote
var refresh = setInterval(printQuote, 20000); 
var bgRefresh = setInterval(getRandomColor, 20000);


// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "Frankly my dear, I don't give a damn.",
        source: 'Clark Gable',
        citation: 'Gone with the Wind',
        year: '1939'
    },
    {
        quote: "Mama said life is like a box of chocolates, you never know what you're going to get.",
        source: 'Tom Hanks',
        citation: 'Forrest Gump',
        year: '1994'
    },
    {
        quote: "Mrs. Robinson you're trying to seduce me. Aren't you?",
        source: "Dustin Hoffman",
        citation: 'The Graduate',
        year: '1967'
    },
    {
        quote: "Of all the gin joints in all of town, she walks into mine.",
        source: 'Humphrey Bogart',
        citation: 'Casablanca',
        year: '1942'
    },
    {
        quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
        source: "Robin Williams",
        citation: "Dead Poets Society",
        year: '1989',
        tag: ', Drama'
    },
    {
        quote: "The greatest trick the devil ever pulled was convincing the world he didn't exist.",
        source: 'Kevin Spacey',
        citation: 'The Usual suspects',
        year: '1995'
    },
    {
        quote: "We're on a mission from God.",
        source: 'Dan Akyroyd',
        citation: 'The Blues Brothers',
        year: '1980'
    },
    {
        quote: "You make me want to be a better man.",
        source: 'Jack Nicholson',
        citation: 'As Good as It Gets',
        year: '1997',
        tag: ', Rom-com'
    },
    {
        quote: "Leave the gun. Take the cannoli.",
        source: 'Richard Castellano',
        citation: 'The Godfather',
        year: '1972'
    },
    {
        quote: "It'd be a lot cooler if you did.",
        source: 'Matthew McConaughey',
        citation: 'Dazed and Confused',
        year: '1993',
        tag: ', Comedy'
    }
];


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote (quotes) {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}

// Create the printQuote function and name it printQuote
function printQuote () {
    var selectedQuote = getRandomQuote(quotes);
    var outputQuote = '<p class= "quote">' + selectedQuote.quote + '</p>';
        outputQuote += '<p class = "source">' + selectedQuote.source  
        if (selectedQuote.citation) {
            outputQuote += '<span class = "citation">' + selectedQuote.citation + '</span>'
        }
        if (selectedQuote.year) {
            outputQuote += '<span class = "year">' + selectedQuote.year + '</span>'
        }
        if (selectedQuote.tag) {
            outputQuote += '<span class = "tag">' + selectedQuote.tag + '</span>'
        }'</p>'
    document.getElementById('quote-box').innerHTML = outputQuote;
}

//function for random color refresh
function getRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb("+ x +", "+ y +", "+ z +")";
    document.body.style.background = bgColor;
}
//will allow the backgroundcolor to change
document.getElementById('loadQuote').addEventListener('click', getRandomColor, false);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);