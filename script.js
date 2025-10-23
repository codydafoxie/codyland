const quotes = [
    "Made with ❤ by Cody",
    "Step into the land of the unknown!",
    "Who knew?",
    "Enjoy your stay!",
    "I knew you'd end up here :)",
    "Win16 is the best era!"
]

const quote = document.getElementById("quote");

quote.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];