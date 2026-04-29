import { modeGrid } from "./codeGrid"
import { createListDivs } from "./codeList"

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
                sessionStorage.setItem("category", "grid-bestRating")
                await modeGrid(sessionStorage.getItem("category"))
            }

        } else if (select.value === "En Cartelera") {
            if (container === null) {
                sessionStorage.setItem("category", "list-nowPlaying")
                document.querySelector(".container-list").remove()
                await createListDivs(sessionStorage.getItem("category"))
            } else {
                document.querySelector(".container-grid").remove()
                sessionStorage.setItem("category", "grid-nowPlaying")
                await modeGrid(sessionStorage.getItem("category"))
            }
        } else if (select.value === "Popular") {
            if (container === null) {
                sessionStorage.setItem("category", "list-Popular")
                document.querySelector(".container-list").remove()
                await createListDivs(sessionStorage.getItem("category"))
            } else {
                document.querySelector(".container-grid").remove()
                sessionStorage.setItem("category", "grid-Popular")
                await modeGrid(sessionStorage.getItem("category"))
            }
        } else if (select.value === "Próximamente") {
            if (container === null) {
                sessionStorage.setItem("category", "list-Proximamente")
                document.querySelector(".container-list").remove()
                await createListDivs(sessionStorage.getItem("category"))
            } else {
                document.querySelector(".container-grid").remove()
                sessionStorage.setItem("category", "grid-Proximamente")
                await modeGrid(sessionStorage.getItem("category"))
            }
        }
    })
}

