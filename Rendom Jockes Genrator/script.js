// developper.io this is a api for rendom jockes genrator

const jokeDisplay = document.getElementById("jokeDisplay");
const generateJokeBtn = document.getElementById("generateJokeBtn");

async function getJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Error fetching joke. Please try again later.";
  }
}

generateJokeBtn.addEventListener("click", async () => {
  const joke = await getJoke();
  jokeDisplay.textContent = joke;
});
