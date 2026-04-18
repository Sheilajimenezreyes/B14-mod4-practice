
import { modeGrid } from "./codeGrid"
import { createListDivs } from "./codeList"
import { searchMovie } from "./Peticion-api/api"


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
            await createListDivs(modeTotal,movies)
        }else if ( mode === "grid") {
            document.querySelector(".container-grid").remove()
            await modeGrid(modeTotal,movies)
        }
    })
}