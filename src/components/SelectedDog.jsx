import React from "react"

export default function SelectedDog({ chosenDog }) {
    return (
        <div id="selectedDog">
            <h2>
                {chosenDog ? (
                    chosenDog.name
                ) : (
                    'select a dog'
                )}
            </h2>
            <ul>
                {chosenDog ? (
                    (Object.keys(chosenDog)).map((entry, index) => (
                        <li key={index} >{entry + ': ' + Object.values(chosenDog)[index]}</li>
                    ))
                ) : (
                    'select a dog'
                )}
            </ul>
        </div>
    )
}