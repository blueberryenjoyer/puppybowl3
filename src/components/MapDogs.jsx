import React from "react"

export default function MapDogs({ inputDogs, setChosenDog, header }) {
    return (
        <div id={`css${inputDogs}`}>
            <h2>
                {`${header}`}
            </h2>
            <ul>
                {inputDogs.length > 0 ? (
                    inputDogs.map((contact, index) => (
                        <li key={index} onClick={() => setChosenDog(contact)}>{contact.name}</li>
                    ))
                ) : (
                    <li>No dogs</li>
                )}
            </ul>
        </div>
    )
}