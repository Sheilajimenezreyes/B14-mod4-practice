import { bestRating, nowPlaying, popular, upcoming } from "./Peticion-api/api";
import camaraRota from "../images/camara-rota.png"
import { detailsMovies } from "./moviesDetails";

export async function createListDivs(mode, movies="vacio") {

    if (movies === "vacio") {
        if (mode === "list-bestRating") {
            movies = await bestRating();
        } else if (mode === "list-nowPlaying") {
            movies = await nowPlaying();
        } else if (mode === "list-Popular") {
            movies = await popular()
        } else if (mode === "list-Proximamente") {
            movies = await upcoming()
        }
        const app = document.querySelector("#app")
        const section = document.createElement("section")
        section.classList = "container-list"
        movies.forEach(movie => {
            let divs = newFunction(movie);
            section.appendChild(divs)
            app.appendChild(section)
        });
    } else {
        const app = document.querySelector("#app")
        const section = document.createElement("section")
        section.classList = "container-list"
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
    image.onerror=()=>{
        image.onerror=null
        image.src = camaraRota
        image.style.width = "270px"
    }
     image.addEventListener("click", async ()=>{
            let section = document.querySelector(".container-list")
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

    const newContainer = document.createElement("div");
    newContainer.classList = "container_infoMovies"
    newContainer.appendChild(tittle)
    newContainer.appendChild(rattingAndYear)
    newContainer.appendChild(description)


    div.appendChild(image);
    div.appendChild(newContainer)
    return div
}



