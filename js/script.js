// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


function printQuote() {
  const quoteObject = getRandomQuote(); //invoking the getRandomQuote function and assigning it to a variable
  document.querySelector('.quote').innerHTML = quoteObject.quote; //selecting quote class and changing it using dot notation
  document.querySelector('.source').innerHTML = quoteObject.source; //selecting source class and changing it using dot notation

  if(quoteObject.citation !== '') { // if the optional citation field has text, create a new node with the text and add it to the DOM
    let citation = document.createElement('span'); //creating the new element
    citation.className = 'citation'; //add the class name so the appropriate styling can be applied
    citation.innerHTML = quoteObject.citation; //setting the text
    document.querySelector('.source').appendChild(citation); //adding it to the DOM under the appropriate parent
  }

  if(quoteObject.year !== '') { // if the optional year field has a number, create a new node with the value and add it to the DOM
    let year = document.createElement('span'); //creating the new element
    year.className = 'year'; //add the class name so the appropriate styling can be applied
    year.innerHTML = quoteObject.year; //setting the text
    document.querySelector('.source').appendChild(year); //adding it to the DOM under the appropriate parent
  }
} //end printQuote

function getRandomQuote() {
  const quoteList = [
    {
      quote: "Walking with a friend in the dark is better than walking alone in the light.",
      source: "Helen Keller",
      citation: "Helen and Teacher: The Story of Helen Keller and Anne Sullivan Macy",
      year: 1920
    },
    {
      quote: "It is one of the blessings of old friends that you can afford to be stupid with them.",
      source: "Ralph Waldo Emerson",
      citation: "Emerson in His Journals",
      year: 1982
    },
    {
      quote: "A friend is someone who gives you total freedom to be yourself.",
      source: "Jim Morrison",
      citation: '',
      year: ''
    },
    {
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      source: "Jimmy Dean",
      citation: "",
      year: ''
    },
    {
      quote: "Change your thoughts and you change your world.",
      source: "Norman Vincent Peale",
      citation: "Reader's Digest",
      year: 1987
    },
    {
      quote: "It is in the moments of decision that your destiny is shaped.",
      source: "Tony Robbins",
      citation: "",
      year: ''
    },
    {
      quote: "The art of communication is the language of leadership.",
      source: "James Humes",
      citation: "",
      year: ''
    },
    {
      quote: "Attitude is the 'little' thing that makes a big difference.",
      source: "Zig Ziglar",
      citation: "See You at the Top",
      year: 1977
    },
    {
      quote: "Family is not an important thing. It's everything.",
      source: "Michael J. Fox",
      citation: "",
      year: ''
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      source: "Confucius",
      citation: "",
      year: ''
    }
  ] //end array of quotes

  let randomNumber = Math.round(Math.random()*(quoteList.length-1)); //generates a number from 0 to 9
  return quoteList[randomNumber];
} //end getRandomQuote
