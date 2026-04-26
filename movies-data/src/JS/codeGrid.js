import { bestRating, nowPlaying, popular, upcoming } from "./Peticion-api/api";
import camaraRota from "../images/camara-rota.png" 
import { detailsMovies } from "./moviesDetails";

export async function modeGrid(mode, movies = "vacio") {
    if (movies === "vacio") {

        if (mode === "grid-bestRating") {
            movies = await bestRating();
        } else if (mode === "grid-nowPlaying") {
            movies = await nowPlaying();
        } else if (mode === "grid-Popular") {
            movies = await popular()
        } else if (mode === "grid-Proximamente") {
            movies = await upcoming()
        }

        const app = document.querySelector("#app")
        const section = document.createElement("section")
        section.classList = "container-grid"
        movies.forEach(movie => {
            let divs = newFunction(movie);
            section.appendChild(divs)
            app.appendChild(section)
        });
    } else {
        const app = document.querySelector("#app")
        const section = document.createElement("section")
        section.classList = "container-grid"
        movies.forEach(movie => {
            let divs = newFunction(movie);
            section.appendChild(divs)
            app.appendChild(section)
        });
    }

}

function newFunction(movie) {
    const { vote_average: valoration, release_date: date } = movie
    const div = document.createElement("div");
    div.classList = "movie_container"

    const image = document.createElement("img");
    image.classList = "movie_poster"
    image.setAttribute("src", "https://image.tmdb.org/t/p/w200" + movie.poster_path)
    image.onerror = () => {
        image.onerror = null 
        image.src = camaraRota
        image.style.maxWidth="100%"
    }
    image.addEventListener("click", async ()=>{
        let section = document.querySelector(".container-grid")
        section.remove()
        await detailsMovies(movie)
    })

    const tittle = document.createElement("h3");
    tittle.classList = "movie_tittle"
    tittle.textContent = movie.original_title

    const rattingAndYear = document.createElement("p");
    rattingAndYear.classList = "movie_rating"
    rattingAndYear.textContent = valoration + " | " + date.split("-")[0]

    const description = document.createElement("p");
    description.classList = "movie_description"
    description.textContent = movie.overview === "" ? "--sin descripcion--" : movie.overview

    div.appendChild(image);
    div.appendChild(tittle);
    div.appendChild(rattingAndYear);
    div.appendChild(description);
    return div
}