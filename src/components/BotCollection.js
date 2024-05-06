import React,{useState, useEffect} from "react";

function BotCollection() {
    const [data, setData] = useState({bots : []})

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(resp => resp.json())
        .then ((bots) => {
            setData({bots : bots})
        })
        //console.log(data)
    }, [])

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={data.bots.avatar_url}  alt="Bot" />
            <div className="card-body">
                <ul className="card-text">
                    <li>{data.bots.name}</li>
                    <li>{data.bots.health}</li>
                    <li>{data.bots.damage}</li>
                    <li>{data.bots.armour}</li>
                    <li>{data.bots.catchphrase}</li>
                    <li>{data.bots.created_at}</li>
                    <li>{data.bots.updated_at}</li>
                </ul>
            </div>
        </div>
    )
    
}

export default BotCollection