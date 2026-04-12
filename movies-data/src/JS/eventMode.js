import { showBestMovies } from "./bestRating"
import { createListDivs } from "./codeList"
import { createDivs } from "./nowPlaying"
import { showPopular } from "./popular"
import { showUpcoming } from "./upcoming"

export function optionsLayout(){
    const grid = document.querySelector(".grid-mode")
    const list = document.querySelector(".list-mode")
    const container = document.querySelector(".container-grid")
    grid.addEventListener("click", async ()=> {
        let mode = sessionStorage.getItem("category")
        if(container!=null && mode==="list-bestRating"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-bestRating")
            await showBestMovies()
        }else if(container!=null && mode==="list-nowPlaying"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-nowPlaying")
            await createDivs()
        }else if(container!=null && mode==="list-Popular"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-Popular")
            await showPopular()
        }else if(container!=null && mode==="list-Proximamente"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-Proximamente")
            await showUpcoming()
        }
    })
    list.addEventListener("click", async ()=> {
        let mode = sessionStorage.getItem("category")
        if(container!=null && mode==="grid-bestRating"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-bestRating")
            await createListDivs(sessionStorage.getItem("category"))
        }else if(container!=null && mode==="grid-nowPlaying"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-nowPlaying")
            await createListDivs(sessionStorage.getItem("category"))
        }else if(container!=null && mode==="grid-Popular"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-Popular")
            await createListDivs(sessionStorage.getItem("category"))
        }else if(container!=null && mode==="grid-Proximamente"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-Proximamente")
            await createListDivs(sessionStorage.getItem("category"))
        }
    })
}

