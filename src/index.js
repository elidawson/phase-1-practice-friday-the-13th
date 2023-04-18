function fetchResource() {
    fetch('http://localhost:3000/movies') //return is only necessary if fetchResource is used outside its initial declaration
    .then (res => res.json())
    //.then(data => console.log(data))
    .then (movies => {
        movies.forEach(movie => {
            createImageTag(movie.image, movie.id)
            //nav.addEventListener('click', () => renderCard(movie))
             //no reference to img currently
        })
        renderCard(movies[0])
    })
    .catch(error => console.error)
}
const nav = document.getElementById('movie-list')
nav.addEventListener('click', event => fetchResource2(event.target.dataset.id))
function fetchResource2(id) {
    fetch(`http://localhost:3000/movies/${id}`)
    .then(res => res.json())
    .then(movie => renderCard(movie))
}
function createImageTag(url, id) {
    let img = document.createElement('img')
    img.setAttribute('data-id', id)
    img.src = url
    nav.appendChild(img)
}
fetchResource()
function renderCard(movie) {
    const img = document.getElementById('detail-image')
    const title = document.getElementById('title')
    const year = document.getElementById('year-released')
    const description = document.getElementById('description')
    const watched = document.getElementById('watched') //boolean
    const amount = document.getElementById('amount') //integer
    const rating = document.getElementById('rating') //integer
     img.src = movie.image
     title.textContent = movie.title
     year.textContent = movie.release_year
     description.textContent = movie.description
     watched.textContent = movie.watched
     amount.textContent = movie.amount
    // rating.innerContent = movie.rating
     console.log(movie)
}












