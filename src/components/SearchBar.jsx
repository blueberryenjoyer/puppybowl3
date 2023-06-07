import React from "react"

export default function SearchBar({ allDogs, setChosenDog }) {

    function search() {
        let bar = document.getElementById('searchbarInput').value
        for (let i = 0; i < allDogs.length; i++) {
            if (bar === allDogs[i].name) {
                setChosenDog(allDogs[i])
            }
        }
    }

    return (
        <div id={'searchbarDiv'}>
            <input id='searchbarInput' type="text" placeholder="search dogs"></input>
            <button id='searchbarButton' onClick={search}>search</button>
        </div>
    )
}