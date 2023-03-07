const API_KEY = '087629ac01fb8058f7485b3b22e7b74d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {
    fetch(url.then(res => res.json).then(data => {
        console.log(data.results)
        showMovies(data.results);
    }))
}

function showMovies(data) {
    main.innerHTML= '';

    data.forEach(movie => {
        const {title, poster_path, vote_avarage} = movie
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_avarage)}">${vote_avarage}</span>
        </div>

        <div class="overview">
            ${overview}
        </div>    `


        main.appendChild(movieEl);
    })
}

function getColor(vote) {
    if(vote >= 8) {
        return'gren'
    }else if(vote >= 5) {
        return "orange"
    }
    else{
        return 'rede'
    }
}

form.addEventListener('submit', (e) => {
    e.preventListenerFault();

    const searchTerm = searc.value;

    if(searchTerm) {
        getMovies(searchURL + '&query=' + searchTerm)
    }
})