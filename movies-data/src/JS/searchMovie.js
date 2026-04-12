import { showBestMovies } from "./bestRating"
import { createListDivs } from "./codeList"
import { createDivs } from "./nowPlaying"
import { searchMovie } from "./Peticion-api/api"
import { showPopular } from "./popular"
import { showUpcoming } from "./upcoming"

export function searchMovies() {
    const input = document.querySelector(".input-search")
    const button = document.querySelector(".search-movie")

    button.addEventListener("click", async () => {
        const value = input.value
        const movies = await searchMovie(value)
        const mode=sessionStorage.getItem("category").split("-")[0]
        const modeTotal=sessionStorage.getItem("category")
        sessionStorage.setItem("movies",JSON.stringify(movies));

        if (mode === "list") {
            document.querySelector(".container-list").remove()
            await createListDivs(mode,movies)
        }else if ( modeTotal === "grid-bestRating") {
            document.querySelector(".container-grid").remove()
            await showBestMovies(movies)
        } else if ( modeTotal === "grid-nowPlaying") {
            document.querySelector(".container-grid").remove()
            await createDivs(movies)
        } else if ( modeTotal === "grid-Popular") {
            document.querySelector(".container-grid").remove()
           await showPopular(movies)
        } else if (modeTotal === "grid-Proximamente") {
            document.querySelector(".container-grid").remove()
            await showUpcoming(movies)
        }
    })
}