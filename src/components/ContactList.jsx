import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import MapDogs from './MapDogs.jsx';
import SelectedDog from './SelectedDog.jsx';
import SearchBar from './SearchBar.jsx';
import CreateDog from './CreateDog.jsx';
import './puppy1.css'


export default function ContactList() {
    const [dogs1, setdogs1] = useState([])
    const [dogs2, setdogs2] = useState([])
    const [chosenDog, setChosenDog] = useState(null)
    const [allDogs, setAllDogs] = useState([])

    useEffect(() => {
        async function fetchdogs1() {
            try {
                const response = (await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/teams'))
                const response2 = await response.json()
                const responseTeam1 = Object.values(await response2.data.teams[0].players)
                const responseTeam2 = Object.values(await response2.data.teams[1].players)
                setdogs1(responseTeam1)
                setdogs2(responseTeam2)

                const responseAll = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
                const responseAll2 = await responseAll.json()
                setAllDogs(responseAll2.data.players)

            } catch (error) {
                console.error(error);
            }
        }
        fetchdogs1()
    }, []);



    return (
        <>
            <div className="teams">
                <MapDogs inputDogs={dogs1} setChosenDog={setChosenDog} header='team 1' />
                <MapDogs inputDogs={dogs2} setChosenDog={setChosenDog} header='team 2' />
            </div>

            <SelectedDog chosenDog={chosenDog} setdogs1={setdogs1} setdogs2={setdogs2} />

            <MapDogs inputDogs={allDogs} setChosenDog={setChosenDog} header='all dogs' />

            <SearchBar allDogs={allDogs} setChosenDog={setChosenDog} />

            <CreateDog setAllDogs={setAllDogs} allDogs={allDogs} />
        </>
    );
}