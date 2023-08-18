import { useState } from "react";
import { json } from "react-router-dom";


export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState([])
    const [breed, setBreed] = useState("");
    const [team, setTeam] = useState(false);
    const [newPlayer, setNewplayer] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        console.log({ name, id, image, breed, team, newPlayer });
        // autheticate();

        try {
            const response = await fetch(`${API_URL}/players/`,
                {
                    method: "POST",
                    body: JSON.stringify(newPlayer),
                    headers: { "Content-Type": "application/json" },
                });
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.error('oopsies', err);
        }

    };

    function resetForm() {
        setName("");
        setId("");
        setImage([]);
        setBreed("");
        setTeam(false);
        setNewplayer(null);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>New Player Form</h1>
                <label>name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
                <br />

                {/* <label>image</label>
                <input
                    type="text"
                    id="imgUrl"
                    name="imgUrl"
                    placeholder="image url"
                    value={imageUrl}
                    onChange={(e) =>
                        setImage(e.target.value)
                    }
                />
                <br /> */}

                <label>breed</label>
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    placeholder="breed"
                    value={breed}
                    onChange={(e) =>
                        setBreed(e.target.value)
                    }
                />
                <br />

                <label>team</label>
                <input
                    type="text"
                    id="team"
                    name="team"
                    placeholder="team"
                    value={team}
                    onChange={(e) =>
                        setTeam(e.target.value)
                    }
                /><br />
                <button type="reset">Reset form</button>
                <button type="submit">Submit form</button>
            </form>

            {newPlayer && (
                <div>
                    <p>name: {newPlayer.name}</p>
                    <p>id: {newPlayer.id}</p>
                    <p>breed: {newPlayer.breed}</p>
                    <p>
                        <img src={newPlayer.imageUrl} />
                    </p>
                    <p>team: {newPlayer.team}</p>
                </div>
            )}
        </>
    )
}