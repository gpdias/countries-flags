import React from "react"
import Cards from "./Cards"
import paises from "./all"

function createCards(pais) {
return (
    <Cards 
    name = {pais.name}
    flag= {pais.flag}
    />
); }

function List() {
    return(
       <div className = "list">{paises.map(createCards)}</div> 
    )
        
}


export default List;