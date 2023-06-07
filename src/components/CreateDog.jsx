import React from "react"

export default function CreateDog({ setAllDogs }) {

    function genesis() {
        const newDog = { "id": 420, "name": "Puppy", "breed": "Mutt", "status": "bench", "imageUrl": "N/A", "createdAt": "1971-08-20", "updatedAt": "2023-06-06", "teamId": null, "cohortId": 396 }
        setAllDogs(c => [...c, newDog])
    }


    return (
        <div id={'dogMakerDiv'}>
            <button id='dogMakerButton' onClick={genesis}>make new dog locally</button>
        </div>
    )
}