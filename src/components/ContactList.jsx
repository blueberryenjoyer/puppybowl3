import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import dummy from './DummyData.jsx'
import './puppy.css'

//because i could not figure out the name of our cohort, i used dummy data from the documentation
//i cannot complete the api call section of this project.

export default function ContactList(props) {
    const [contacts, setContacts] = useState(0)
    const [contacts2, setContacts2] = useState(0)

    useEffect(() => {
        function fetchContacts() {
            try {
                const response = dummy()
                const responseteam1 = response.data.teams[0]
                const responseteam2 = response.data.teams[1]
                const arr1 = Object.values(responseteam1.players);
                const arr2 = Object.values(responseteam2.players);
                setContacts(arr1)
                setContacts2(arr2)

            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
    }, []);

    return (
        <div className="contacts-container">
            <div id="team1">
                <h2>team 1:</h2>
                <ul>
                    {contacts.length > 0 ? (
                        contacts.map((contact, index) => (
                            <li key={index}>{contact.name}</li>
                        ))
                    ) : (
                        <li>Loading team 1...</li>
                    )}
                </ul>
            </div>
            <div id="team2">
                <h2 >team 2:</h2>
                <ul>
                    {contacts2.length > 0 ? (
                        contacts2.map((contact, index) => (
                            <li key={index}>{contact.name}</li>
                        ))
                    ) : (
                        <li>Loading team 2...</li>
                    )}
                </ul>
            </div>
        </div>
    );
}