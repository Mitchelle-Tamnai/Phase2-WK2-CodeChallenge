import React,{useState, useEffect} from "react";

function BotCollection() {
    const [data, setData] = useState({bots : []})

    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(resp => resp.json())
        .then ((bots) => {
            console.log(bots)
        })
        console.log(data)
    }, [])

    return (
        <div className="card" style={{width: 18}}>
            
        </div>
    )
    
}

export default BotCollection