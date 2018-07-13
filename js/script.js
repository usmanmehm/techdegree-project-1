// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(printQuote, 30000); // continuously changes the quote after 30 seconds 

function printQuote() {
  const quoteObject = getRandomQuote(); //invoking the getRandomQuote function and assigning it to a variable

  let quoteHTML =
    `<p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}`; //this is the core HTML to be added to the quote-box div

  if(quoteObject.citation !== '') { // if the optional citation field has text, add it to the HTML
    quoteHTML += `<span class="citation">${quoteObject.citation}</span>`;
  }

  if(quoteObject.year !== '') { // if the optional year field has a number, add it to the HTML
    quoteHTML += `<span class="year">${quoteObject.year}</span>`;
  }
  quoteHTML += `<p class ="tag-box">`
  quoteObject.tags.forEach(function (tag) {
    quoteHTML += `<span class='tags'>${tag}</span>`;
  });
  quoteHTML += '</p></p>';

  document.querySelector('#quote-box').innerHTML = quoteHTML; //adding the HTML to index.html in the div with id: quote-box

  let randomColor = getRandomColor(); // getting a random color
  document.body.style.backgroundColor = randomColor; //changing the color of the page to the random color
  document.querySelector('#loadQuote').style.backgroundColor = randomColor; //changing the color of the button to the random color
} //end printQuote

function getRandomQuote() {
  const quotes = [
    {
      quote: "Walking with a friend in the dark is better than walking alone in the light.",
      source: "Helen Keller",
      citation: "Helen and Teacher: The Story of Helen Keller and Anne Sullivan Macy",
      year: 1920,
      tags: ['Friendship']
    },
    {
      quote: "It is one of the blessings of old friends that you can afford to be stupid with them.",
      source: "Ralph Waldo Emerson",
      citation: "Emerson in His Journals",
      year: 1982,
      tags: ['Friendship', 'Humor']
    },
    {
      quote: "A friend is someone who gives you total freedom to be yourself.",
      source: "Jim Morrison",
      citation: '',
      year: '',
      tags: ['Friendship']
    },
    {
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      source: "Jimmy Dean",
      citation: '',
      year: '',
      tags: ['Inspirational']
    },
    {
      quote: "Change your thoughts and you change your world.",
      source: "Norman Vincent Peale",
      citation: "Reader's Digest",
      year: 1987,
      tags: ['Inspirational', 'Thinking']
    },
    {
      quote: "It is in the moments of decision that your destiny is shaped.",
      source: "Tony Robbins",
      citation: '',
      year: '',
      tags: ['Inspirational']
    },
    {
      quote: "The art of communication is the language of leadership.",
      source: "James Humes",
      citation: '',
      year: '',
      tags: ['Communication', 'Leadership']
    },
    {
      quote: "Attitude is the 'little' thing that makes a big difference.",
      source: "Zig Ziglar",
      citation: "See You at the Top",
      year: 1977,
      tags: ['Attitude']
    },
    {
      quote: "Family is not an important thing. It's everything.",
      source: "Michael J. Fox",
      citation: '',
      year: '',
      tags: ['Family', 'Life']
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      source: "Confucius",
      citation: '',
      year: '',
      tags: ['Inspirational']
    }
  ] //end array of quotes

  let randomNumber = Math.round(Math.random()*(quotes.length-1)); //generates a number from 0 to 9
  return quotes[randomNumber];
} //end getRandomQuote

function getRandomColor() { //function to return a random hexadecimal color code
  const colorList = ['#8E44AD', '#F4D03F', '#EB984E', '#CB4335', '#3498DB', '#0B5345', '#34495E', '#008080', '#800000'] //list of hexadecimal numbers
  let randomColor = Math.round(Math.random()*(colorList.length-1));
  return colorList[randomColor];
}
