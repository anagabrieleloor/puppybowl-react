

// const [players, setPlayers] = useState([])
const cohortName = "2306-ghp-et-web-ft-sf";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;



const fetchAllPlayers = async () => {
  try {
   
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    console.log(result.data.players);

    return result;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

export default fetchAllPlayers