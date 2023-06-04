import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import dummy from './DummyData.jsx'

//because i could not figure out the name of our cohort, i used dummy data from the documentation
//i cannot complete the api call section of this project.

export default function ContactList({ setSelectedContactId, selectedContactId }) {
    const [contacts, setContacts] = useState(0)
    const [contacts2, setContacts2] = useState(0)

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = dummy()
                const responseteam1 = response.data.teams[0]
                const responseteam2 = response.data.teams[1]
                const arr1 = Object.values(responseteam1.players);
                const arr2 = Object.values(responseteam2.players);
                setContacts(arr1)
                setContacts2(arr2)
                console.log(contacts)
                //why does this log 0? if i save this and it auto-updates, it becomes the array i want.
                //i dont think i understand state, or async, or something else i am missing

            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
        console.log(contacts) //this also logs 0
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">team1</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        dogsss
                    </td>
                </tr>
            </tbody>

            <thead>
                <tr>
                    <th colSpan="3">team2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        dogs
                    </td>
                </tr>
            </tbody>
        </table>

    );
}