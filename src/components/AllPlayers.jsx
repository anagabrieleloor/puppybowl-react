import fetchAllPlayers from "../API/index"
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"



export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            const fetchedPlayers = await fetchAllPlayers();
            console.log(fetchedPlayers);

            setPlayers(fetchedPlayers.data.players);
        }
        fetchData();

    }, [])

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
                            
       


                        </li>
                    )
                })
            }

        </div>
    )
}