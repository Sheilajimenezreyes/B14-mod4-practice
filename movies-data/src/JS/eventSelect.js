import { showBestMovies } from "./bestRating"
import { createDivs } from "./nowPlaying"
import { showPopular } from "./popular"
import { showUpcoming } from "./upcoming"

export function eventSelect() {
    const select = document.querySelector(".select-header")
    select.addEventListener("change", async () => {
        if (select.value === "Mejor Valoradas") {
            document.querySelector(".container-grid").remove()
            await showBestMovies()
        }else if(select.value === "En Cartelera"){
            document.querySelector(".container-grid").remove()
            await createDivs()
        }else if(select.value === "Popular"){
            document.querySelector(".container-grid").remove()
            await showPopular()
        }else if(select.value === "Próximamente"){
            document.querySelector(".container-grid").remove()
            await showUpcoming()
        }
    })
}

