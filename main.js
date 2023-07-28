let button = document.querySelector("button")
let quote = document.getElementById("quote")
let author = document.getElementById("author")
let tags = document.getElementById("tags")


const getQuote = async()=>{
    const response = await fetch("http://quotable.io/random");
    const data =await response.json();
    quote.innerText = data.content
    author.innerText = data.author
    tags.innerText = data.tags
    
}

button.addEventListener("click",getQuote)