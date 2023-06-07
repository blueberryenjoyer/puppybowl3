import React from "react"

export default function PostDog() {

    async function post() {
        try {
            const response = await fetch(
                'https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: 'Calvin',
                        breed: 'Snoop',
                        imageUrl: 'https://cdn.britannica.com/73/135873-050-735FEF6E/Snoop-Dogg-2008.jpg',
                        status: 'field'
                    }),
                }
            );
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }
    async function kill() {
        try {
            const response = await fetch(
                'https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players/7974',
                {
                    method: 'DELETE',
                }
            );
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }
    async function decline() {


        alert('this is disabled in the production build');

    }

    return (
        <div>
            <button id='snoopButton' onClick={decline}>add snoop ONCE PLEASE</button>
            <button id='deleteButton' onClick={decline}>delete snoop</button>
        </div>
    )
}