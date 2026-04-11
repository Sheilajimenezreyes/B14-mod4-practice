import { showBestMovies } from "./bestRating"
import { createDivs } from "./nowPlaying"
import { bestRating } from "./Peticion-api/api"

export function eventSelect() {
    const select = document.querySelector(".select-header")
    select.addEventListener("change", async () => {
        if (select.value === "Mejor Valoradas") {
            document.querySelector(".container-grid").remove()
            await showBestMovies()
        }else if(select.value === "En Cartelera"){
            document.querySelector(".container-grid").remove()
            await createDivs()
        }
    })
}

