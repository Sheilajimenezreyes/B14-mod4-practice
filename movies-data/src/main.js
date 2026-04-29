
import { modeGrid } from "./JS/codeGrid"
import { optionsLayout } from "./JS/eventMode"
import { eventSelect } from "./JS/eventSelect"
import { searchMovies } from "./JS/searchMovie"



import "./style.scss"
sessionStorage.clear()
sessionStorage.setItem("category","grid-nowPlaying")
let mode=sessionStorage.getItem("category")
await modeGrid(mode, sessionStorage.getItem("movies")!=null?JSON.parse(sessionStorage.getItem("movies")):"vacio")
eventSelect()
optionsLayout()
searchMovies()

