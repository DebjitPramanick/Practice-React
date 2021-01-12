import React, { useEffect,useState } from 'react'
import Axios from 'axios'

const API = () => {

    const url = "https://official-joke-api.appspot.com/random_joke";

    const [items,setItems] = useState("");

    useEffect(()=>{
        Axios.get(url)
        .then( resp =>{
            console.log(resp);
            setItems(resp.data.setup + "..." + resp.data.punchline);
        })
    },[]);

    return(
        <div className="container">
            <div className="api-card">
                {items}
            </div>
        </div>
    )
}

export default API
