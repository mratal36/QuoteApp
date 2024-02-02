// api for diffrent quote

let quote = document.querySelector("blockquote");
const newQuote = document.querySelector(".new-quote");
const span = document.querySelector("span");
const tweet = document.querySelector(".tweet")


async function getQuotes(){
    let data = await fetch("https://api.quotable.io/quotes/random");
    let response = await data.json();
     quote.innerHTML = response[0].content;
     span.innerHTML = response[0].author;
     console.log(response[0]);
}

newQuote.addEventListener("click",getQuotes);



function tweetFunc(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} -----by ${span.innerHTML}`,"Tweet Window","width=600","height=300")
}
tweet.addEventListener("click",tweetFunc);