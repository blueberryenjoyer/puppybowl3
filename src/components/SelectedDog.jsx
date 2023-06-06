import React from "react"

export default function SelectedDog({ chosenDog, setdogs1, setdogs2 }) {
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
                    )))
                    : ('select a dog')}
            </ul>

            {chosenDog ? (
                <ul>
                    <button onClick={() => setdogs1(c => [...c, chosenDog])}>add to team 1</button>
                    <button onClick={() => setdogs2(c => [...c, chosenDog])}>add to team 2</button>
                </ul>
            )
                : ('select a dog')}

        </div>
    )
}