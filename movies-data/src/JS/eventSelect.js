import { showBestMovies } from "./bestRating"
import { createListDivs } from "./codeList"
import { createDivs } from "./nowPlaying"
import { nowPlaying, popular, upcoming } from "./Peticion-api/api"
import { showPopular } from "./popular"
import { showUpcoming } from "./upcoming"

export function eventSelect() {
    const select = document.querySelector(".select-header")
    select.addEventListener("change", async () => {
        const container = document.querySelector(".container-grid")
        if (select.value === "Mejor Valoradas") {
            if (container === null) {
                sessionStorage.setItem("category", "list-bestRating")
                document.querySelector(".container-list").remove()
                await createListDivs(sessionStorage.getItem("category"))
            } else {
                document.querySelector(".container-grid").remove()
                await showBestMovies()
                sessionStorage.setItem("category", "grid-bestRating")
            }

        } else if (select.value === "En Cartelera") {
            if (container === null) {
                sessionStorage.setItem("category", "list-nowPlaying")
                document.querySelector(".container-list").remove()
                await createListDivs(sessionStorage.getItem("category"))
            } else {
                document.querySelector(".container-grid").remove()
                await createDivs()
                sessionStorage.setItem("category", "grid-nowPlaying")
            }
        } else if (select.value === "Popular") {
            if (container === null) {
                sessionStorage.setItem("category", "list-Popular")
                document.querySelector(".container-list").remove()
                await createListDivs(sessionStorage.getItem("category"))
            } else {
                document.querySelector(".container-grid").remove()
                await showPopular()
                sessionStorage.setItem("category", "grid-Popular")
            }
        } else if (select.value === "Próximamente") {
            if (container === null) {
                sessionStorage.setItem("category", "list-Proximamente")
                document.querySelector(".container-list").remove()
                await createListDivs(sessionStorage.getItem("category"))
            } else {
                document.querySelector(".container-grid").remove()
                await showUpcoming()
                sessionStorage.setItem("category", "grid-Proximamente")
            }
        }
    })
}

