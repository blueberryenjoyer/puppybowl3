import React from "react"

export default function CreateDog({ setAllDogs, allDogs }) {

    function genesis() {
        const newDog = { "id": 420, "name": "Calvin", "breed": "Snoop", "status": "field", "imageUrl": "https://cdn.britannica.com/73/135873-050-735FEF6E/Snoop-Dogg-2008.jpg", "createdAt": "1971-08-20", "updatedAt": "2023-06-06", "teamId": null, "cohortId": 396 }
        setAllDogs(c => [...c, newDog])
    }


    return (
        <div id={'dogMakerDiv'}>
            <button id='dogMakerButton' onClick={genesis}>make new dog</button>
        </div>
    )
}