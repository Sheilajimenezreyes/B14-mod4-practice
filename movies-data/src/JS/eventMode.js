
import { modeGrid } from "./codeGrid"
import { createListDivs } from "./codeList"


export function optionsLayout(){
    const grid = document.querySelector(".grid-mode")
    const list = document.querySelector(".list-mode")
    const container = document.querySelector(".container-grid")
    grid.addEventListener("click", async ()=> {
        let mode = sessionStorage.getItem("category")
        if(container!=null && mode==="list-bestRating"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-bestRating")
            await modeGrid(sessionStorage.getItem("category"), sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }else if(container!=null && mode==="list-nowPlaying"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-nowPlaying")
            await modeGrid(sessionStorage.getItem("category"), sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }else if(container!=null && mode==="list-Popular"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-Popular")
            await modeGrid(sessionStorage.getItem("category"), sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }else if(container!=null && mode==="list-Proximamente"){
            document.querySelector(".container-list").remove()
            sessionStorage.setItem("category", "grid-Proximamente")
            await modeGrid(sessionStorage.getItem("category"), sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }
    })
    list.addEventListener("click", async ()=> {
        let mode = sessionStorage.getItem("category")
        if(container!=null && mode==="grid-bestRating"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-bestRating")
            await createListDivs(sessionStorage.getItem("category"),sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }else if(container!=null && mode==="grid-nowPlaying"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-nowPlaying")
            await createListDivs(sessionStorage.getItem("category"),sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }else if(container!=null && mode==="grid-Popular"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-Popular")
            await createListDivs(sessionStorage.getItem("category"),sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }else if(container!=null && mode==="grid-Proximamente"){
            document.querySelector(".container-grid").remove()
            sessionStorage.setItem("category", "list-Proximamente")
            await createListDivs(sessionStorage.getItem("category"),sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
        }
    })
}

