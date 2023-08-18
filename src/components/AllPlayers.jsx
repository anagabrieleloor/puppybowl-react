import fetchAllPlayers from "../API/index"
import { useNavigate, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"



export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {

            const fetchedPlayers = await fetchAllPlayers();
            console.log(fetchedPlayers);

            setPlayers(fetchedPlayers.data.players);
        }
        fetchData();

    }, [])

    async function handleDelete(event) {
        event.preventDefault ();
        try {
            const response = await fetch(`${API_URL}/players/${playerId}`, {
                method: 'DELETE'
            })
            const result = await response.json()
            return result; 
            // window.location.reload();
        } catch (err) {
            console.error(`oopsies`, err
            )
        }
    }

    return (
        <div>
            {
                players.map((player) => {
                    return (
                        <li key={player.id}>
                            <h4>{player.name}</h4>
                            <p>
                            <img src="${player.imgUrl}"/>
                            </p>
                            <p>ID: {player.id}</p>
                            <p>Breed: {player.breed}</p>
                            <button onClick={() => navigate(`/players/${player.id}`)}>More Info</button>
                            <button onClick={handleDelete}>Delete</button>
       


                        </li>
                    )
                })
            }

        </div>
    )
}