import { actors } from "./Peticion-api/api";
import perfilError from "../images/perfil-error.png";
import { optionsLayout } from "./eventMode";
import { modeGrid } from "./codeGrid";
import { createListDivs } from "./codeList";

export async function detailsMovies(movie) {
    const { release_date: date, vote_average: rating } = movie
    const container = document.createElement("div")
    container.classList = "container-details"
    container.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(https://image.tmdb.org/t/p/w200${movie.backdrop_path})
  `
    let getDiv = document.querySelector("#app")

    const poster = document.createElement("img")
    poster.classList = "movie-poster"
    poster.setAttribute("src", "https://image.tmdb.org/t/p/w200" + movie.poster_path)
    poster.onerror = () => {
        poster.onerror = null
        poster.src = camaraRota
    }
    container.appendChild(poster)

    createElements(container, movie, rating, date);

    getDiv.appendChild(container)
    await casts(movie, getDiv)
    clickArrow()
}

function createElements(container, movie, rating, date) {
    const containerInformation = document.createElement("div");
    containerInformation.classList = "container-info";
    container.appendChild(containerInformation);

    const tittle = document.createElement("h2");
    tittle.classList = "movie-title";
    tittle.textContent = movie.original_title;
    containerInformation.appendChild(tittle);

    const valoration = document.createElement("p");
    valoration.classList = "rating-details";
    valoration.textContent = rating + " | " + date;
    containerInformation.appendChild(valoration);

    const description = document.createElement("p");
    description.classList = "movie-description";
    description.textContent = movie.overview === "" ? "--sin descripcion--" : movie.overview;
    containerInformation.appendChild(description);
}

async function casts(movie, getDiv) {
    const id = movie.id
    let distribution = await actors(id);

    let infoDirectors;
    let infoActors;

    const divDirectorPrincipal = document.createElement("div")
    divDirectorPrincipal.classList = "principal-directors"

    const divActorPrincipal = document.createElement("div")
    divActorPrincipal.classList = "principal-actors"

    const divDirectors = document.createElement("div")
    divDirectors.classList = "container-directors"

    const directorTitle = document.createElement("h1")
    directorTitle.className = "title-directors"
    directorTitle.textContent = "Directores"

    divDirectorPrincipal.appendChild(directorTitle)

    const divActors = document.createElement("div")
    divActors.classList = "container-actors"

    const actorTitle = document.createElement("h1")
    actorTitle.className = "title-actors"
    actorTitle.textContent = "Actores"

    divActorPrincipal.appendChild(actorTitle)

    for (let i = 0; i < distribution.length; i++) {
        let { profile_path: poster } = distribution[i];
        if (distribution[i].known_for_department === "Directing") {
            infoDirectors = createDirectors(infoDirectors, poster, distribution, i, divDirectors);
        } else {
            infoActors = createActors(infoActors, poster, distribution, i, divActors);
        }
    }
    addApp(divDirectors, divDirectorPrincipal, divActorPrincipal, divActors, getDiv);
}

function addApp(divDirectors, divDirectorPrincipal, divActorPrincipal, divActors, getDiv) {
    if (!divDirectors.children.length) divDirectorPrincipal.style.display = "none";
    divDirectorPrincipal.appendChild(divDirectors);
    divActorPrincipal.appendChild(divActors);

    getDiv.appendChild(divDirectorPrincipal);
    getDiv.appendChild(divActorPrincipal);
}

function createActors(infoActors, poster, distribution, i, divActors) {
    infoActors = document.createElement("div");
    infoActors.classList = "info-actors";
    let image = document.createElement("img");

    image.className = "actor-poster";

    image.setAttribute("src", "https://image.tmdb.org/t/p/w200" + poster);
    image.onerror = () => {
        image.onerror = null;
        image.src = perfilError;

    };
    let characterActor = document.createElement("h2");
    characterActor.className = "actor-character";
    let line = document.createElement("p");
    line.textContent = "-----------------";
    let nameActors = document.createElement("h2");
    nameActors.className = "name-actors";
    nameActors.textContent = distribution[i].name.split(" ")[0] + " " + distribution[i].name.split(" ")[1];
    characterActor.textContent = distribution[i].character;
    console.log(characterActor);
    infoActors.appendChild(image);
    infoActors.appendChild(nameActors);
    infoActors.appendChild(line);
    infoActors.appendChild(characterActor);
    divActors.appendChild(infoActors);
    return infoActors;
}

function createDirectors(infoDirectors, poster, distribution, i, divDirectors) {
    infoDirectors = document.createElement("div");
    infoDirectors.className = "info-directors";
    let image = document.createElement("img");
    image.className = "director-poster";
    image.setAttribute("src", "https://image.tmdb.org/t/p/w200" + poster);
    image.onerror = () => {
        image.onerror = null;
        image.src = perfilError;
    };
    let line = document.createElement("p");
    line.textContent = "-----------------";
    let characterDirector = document.createElement("h2");
    characterDirector.textContent = distribution[i].character;
    let nameDirectors = document.createElement("h2");
    nameDirectors.classList = "name-directors";
    nameDirectors.textContent = distribution[i].name.split(" ")[0] + " " + distribution[i].name.split(" ")[1];
    infoDirectors.appendChild(image);
    infoDirectors.appendChild(nameDirectors);
    infoDirectors.appendChild(line);
    infoDirectors.appendChild(characterDirector);
    divDirectors.appendChild(infoDirectors);
    return infoDirectors;
}

function clickArrow() {
    const arrow = document.querySelector(".arrow")
    arrow.addEventListener("click", async () => {
        document.querySelector(".container-details").remove()
        document.querySelector(".principal-directors").remove()
        document.querySelector(".principal-actors").remove()
        let secondHeader = document.querySelector(".second-header")
        secondHeader.style.display = "flex"
        let thirdHeader = document.querySelector(".third-header")
        thirdHeader.style.display = "none"
        let section = document.querySelector(".container-list")
        if (sessionStorage.getItem("category").split("-")[0] === "grid" && sessionStorage.getItem("movies") !== null) {
            await modeGrid(sessionStorage.getItem("category"), JSON.parse(sessionStorage.getItem("movies")))
        } else if (sessionStorage.getItem("category").split("-")[0] === "grid" && sessionStorage.getItem("movies") === null) {
            await modeGrid(sessionStorage.getItem("category"))
        } else if (sessionStorage.getItem("category").split("-")[0] === "list" && sessionStorage.getItem("movies") !== null) {
            await createListDivs(sessionStorage.getItem("category"), JSON.parse(sessionStorage.getItem("movies")))
        } else if (sessionStorage.getItem("category").split("-")[0] === "list" && sessionStorage.getItem("movies") === null) {
            await createListDivs(sessionStorage.getItem("category"))
        }

    })
}

