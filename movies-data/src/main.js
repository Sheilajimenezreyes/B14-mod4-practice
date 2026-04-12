
import { optionsLayout } from "./JS/eventMode"
import { eventSelect } from "./JS/eventSelect"
import { createDivs } from "./JS/nowPlaying"



import "./style.scss"
await createDivs()
sessionStorage.setItem("category","grid-nowPlaying")
eventSelect()
optionsLayout()