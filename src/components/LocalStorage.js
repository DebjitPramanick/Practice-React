import React,{useState, useEffect} from 'react'

const LocalStorage = () => {

    const [person, setPerson] = useState("");
    const [key, setKey] = useState("");
    const people = [];

    const addPeople = (e) =>{
        
        e.preventDefault();

        const data=[{
            name: person,
            key: key
        }];
        
        setKey("");
        setPerson("");
        localStorage.setItem("people",JSON.stringify(data));
        
        console.log("Updated");   
    }


    const removePeople = (e) =>{
        e.preventDefault();

        localStorage.clear();
    }


    const allpeople = JSON.parse(localStorage.getItem("people"));

    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Add poeple" onChange={(e)=>setPerson(e.target.value)} value={person}/>
                <input type="text" placeholder="Add key" onChange={(e)=>setKey(e.target.value)} value={key}/>
                <div className="btn-container">
                    <button className="btn"
                    onClick={addPeople}
                    >Add People</button>

                    <button className="btn"
                    onClick={removePeople}
                    >Remove All</button>
                </div>
                
            </form>

            <div className="cardContainer">
                {allpeople && allpeople.map(p => (
                    <div className="card" key={p.key}>
                        <h2>{p.name}</h2>
                    </div>
                ))}
                
            </div>

            
        </div>
    )
}

export default LocalStorage
