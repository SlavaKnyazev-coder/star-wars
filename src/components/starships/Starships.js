import {useState, useEffect} from 'react'

function Starships() {

    const [starships, setStarships] = useState([])

    useEffect(async () => {
        await fetch(`https://swapi.dev/api/starships`)
            .then(resp => resp.json())
            .then(data => setStarships(data.results))
    }, [])
    return(
        <div>
            <ul className="list-group">
                {starships.map((s,idx) => <li key={idx} className="list-group-item">{s.name}</li>)}
            </ul>
        </div>
    )
}

export default Starships