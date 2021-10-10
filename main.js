let displayDiv = document.querySelector("#display-quote");

function getQuote() {
  fetch("https://api.chucknorris.io/jokes/random?category=science")
    .then((response) => response.json())
    .then(function (data) {
      displayDiv.innerText = data.value;
    });
}
