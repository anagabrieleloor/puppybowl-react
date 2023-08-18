import {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom"
import fetchAllPlayers from "../API/index"

export default function SinglePlayer() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                
                const playersData = await fetchAllPlayers();
                console.log(playersData);

                const selectedPlayer = playersData.data.players.find(player => player.id == id);
                setPlayer(selectedPlayer);

            } catch (err) {
                console.error(`oopsie`, err);
            }
        }
        fetchSinglePlayer();
    },[]);

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


    return(
        <div id = "singleplayer">
            {player && ( 
                <>
            <p>
                <b>Name:</b> {player.name}
            </p>
            <p>
                <b>Id:</b> {player.id}
            </p>
            <p>
                <b>Breed:</b> {player.breed}
            </p>
            <p>
                <b>Team:</b> {player.teamId || 'unassigned'}
            </p>
            <p>
                <img src="${player.imgUrl}"/>
            </p>
            <button onClick={() => navigate(`/`)}>Back</button>
            <button onClick={handleDelete}>Delete</button>
            </>
            )}
            
           
        </div>
    )
}