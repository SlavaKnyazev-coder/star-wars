import {useState, useEffect} from 'react';


function People() {

    const [people, setPeople] = useState([])

    useEffect( async () => {
        await fetch(`https://swapi.dev/api/people/`)
            .then(resp => resp.json())
            .then(data => setPeople(data.results))
    }, [])
    console.log(people)
    return (
        <div>
            <ul className="list-group">
                {people.map(p => <li className="list-group-item">{p.name}</li>)}
            </ul>
        </div>
    )
}

export default People