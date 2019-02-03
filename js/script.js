/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

var quotes = [
  {
    quote: "I'm fine the rest of you need therapy.",
    source: "Animal",
    year: "",
    citation: "",
    reaction: ""
  },
  {
    quote: "Vergoofin der flicke støøbin mit der børk-børk yubetcha!",
    source: "Swedish Chef",
    year: "",
    citation: "",
    reaction: ""
  },
  {
    quote: "Smart cooks realize that the easiest cookbook to use is the Yellow Pages and the handiest appliance in the kitchen is the telephone.",
    source: "Miss Piggy",
    year: "",
    citation: "The Muppet Show",
    reaction: "Sassy"
  },
  {
    quote: "Weird is my middle name.",
    source: "Gonzo",
    year: "",
    citation: "Muppet Babies",
    reaction: "Weirdo"
  },
  {
    quote: "I sure could use something from one or more of the basic food groups.",
    source: "Fozzie",
    year: "1981",
    citation: "The Great Muppet Caper",
    reaction: ""
  },
  {
    quote: "If life were easy, it wouldn't be difficult.",
    source: "Kermit the Frog",
    year: "2006",
    citation: "Before You Leap",
    reaction: ""
  },
  {
    quote: "Mah Nà Mah Nà",
    source: "The Snowths",
    year: "1976",
    citation: "The Muppet Show",
    reaction: "Mah Nà Mah Nà"
  },
  {
    quote: "I don’t care what you think of me, unless you think I’m awesome. In which case you are right.",
    source: "Miss Piggy",
    year: "",
    citation: "",
    reaction: "Sassy"
  }
]

function getRandomQuote() {
  var randoNumber = Math.floor(Math.random()*(quotes.length));
  return (quotes[randoNumber]);
}

function printQuote() {
  var randoQuote = getRandomQuote();
  var message = '<p class="quote">' + randoQuote.quote + '</p>';
  message += '<p class="source">' + randoQuote.source;
  /* Check to see if citation has content, if citation is present add to message */
  if (randoQuote.citation.length == 0) {} else {
    message += '<span class="citation">' + randoQuote.citation + '</span>';
  }
  /* Check to see if year has content, if year is present add to message */
  if (randoQuote.year.length == 0) {} else {
    message += '<span class="year">' + randoQuote.year + '</span>';
  }
  message += '</p>';
  /* Check to see if reaction has content, if reaction is present add to message */
  if (randoQuote.reaction.length == 0) {} else {
    message += '<p class="reaction"> Verdict: ' + randoQuote.reaction + '</p>';
  }

  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;

  return randoQuote;
};

printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
