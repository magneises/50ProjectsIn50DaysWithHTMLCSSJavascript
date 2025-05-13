
// const API_KEY = process.env.API_KEY;
// const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6cdfb49d3049a83c21911fde8c7d1c3&page=1'
const IMG_PATH = 'https://imaeg.tmdb.org/t/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b6cdfb49d3049a83c21911fde8c7d1c3&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')


// Get initial movies
getMovie(API_URL)

async function getMovie(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovie(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})


