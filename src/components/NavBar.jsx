import { Link } from 'react-router-dom'

export default function NavBar() {
    return(
        <div>
        <Link to="/">All Players</Link>
      <Link to="/players/:id">Single Player</Link>
  
      
        </div>
    )
}