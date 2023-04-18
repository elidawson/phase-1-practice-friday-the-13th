let movieArray //this is so the array is available outside of the fetch function  
let currentMovie // Global variable used to display the first movie in main content at page refresh


/***************************FETCH REQUESTS*********************************************/ 
//GET
function getMovies() {fetch("http://localhost:3000/movies")
  .then(response => response.json()) // Parsing into JS Object
  .then(movies => {
    movieArray = movies // Declaring the response into global variable movieArray
    currentMovie = movieArray[0] // Declaring first Movie in the Array as a global variable
    movies.map((movie) => {
      renderNav(movie) // Invoking renderNav to populate the Nav with the Array Data
      renderCard(currentMovie); // Invoking renderCard to populate with the First Movie of the Array
    })}
  )}

//PATCH
function updateWatched() {
  fetch(`http://localhost:3000/movies/${currentmovie.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(() => watched = true),
  })
    .then((response) => response.json()) 
    .then((response) => console.log(response));
}


/***************************RENDERING FUNCTIONS*****************************************/ 
const movieList = document.querySelector(["#movie-list"]); //Container div for NAV, declared in global scope

//Render nav Function
function renderNav(movie) {
  const img = document.createElement("img") // Creating img element
  img.src = movie.image // setting img source
  img.alt = movie.title // setting img alt
  movieList.append(img) // appending img element to the movieList div
  img.addEventListener("click", () => renderCard(movie)) //add event listener of click to the images on the nav, calling back to the renderCard
}

/**********DECLARING HTML ELEMENTS AS VARIABLES********/
const div = document.getElementById("movie-info") 
const title = document.getElementById("title")
const img = document.getElementById("detail-image")
const releaseYear = document.getElementById("year-released")
const description = document.getElementById("description")
const watchedBtn = document.getElementById("watched")
const blood = document.getElementById("amount")

// Render Main Content Area Function
function renderCard(movie) {
  title.innerText = movie.title
  img.src = movie.image
  img.alt = movie.title 
  releaseYear.innerText = movie.release_year
  description.innerText = movie.description
  blood.innerText = movie.blood_amount
  watchedBtn.textContent = movie.watched ? "Watched" : "Unwatched" // displaying correct text based on truthiness of json data
  watchedBtn.addEventListener("click", () => { //optimistic rendering
    movie.watched = !movie.watched
    watchedBtn.textContent = movie.watched ? "Watched" : "Unwatched"})
  }
  

/***************BLOOD AMOUNT*********************/

//Grabbing elements of Blood Amount form
const bloodAmount = document.querySelector('#blood-amount')
const bloodForm = document.querySelector('#blood-form')



function getBloodAmount() {
  bloodAmount.addEventListener('change', (e) => {
    submitForm(e.target.value)
})
}

function submitForm(bloodAmount) {
  
  bloodForm.addEventListener('submit', (e) => {
    e.preventDefault()
    currentMovie.blood_amount += Number(bloodAmount) 
    console.log(currentMovie.blood_Amount)
    console.log(currentMovie)
    blood.textContent = currentMovie.blood_amount
})} 

/***********INVOCATIONS***********/
getMovies()
getBloodAmount()










