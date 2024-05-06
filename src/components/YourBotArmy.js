import React,{useState, useEffect} from "react";

function YourBotArmy() {
    const [armyBots, setArmyBots] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/bots", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(armyBots)

        })
        .then(resp => resp.json())
        .then(
            setArmyBots()
        )

    }, [])
    return (
        <div>
            <div className="container">
            <div className="row justify-content-center">
                {data.bots.map(i => (
                    <div key={i.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={i.avatar_url} alt="Bot" />
                            <div className="card-body">
                                <h5 className="card-title">{i.name}</h5>
                                <p>{i.catchphrase}</p>
                                <p> 
                                {i.health} <span>&#9829;</span> | {i.damage} <span>&#128165;</span> | {i.armor} <span>&#128737;</span>
                                </p>
                                <ul className="list-unstyled">
                                    <li>{i.created_at}</li>
                                    <li>{i.updated_at}</li>
                                </ul>
                                <button type="button" class="btn btn-primary btn-sm m-3">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            
        </div>
    )
    
}

export default YourBotArmy