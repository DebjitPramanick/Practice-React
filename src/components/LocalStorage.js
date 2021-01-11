import React,{useState, useEffect, useCallback} from 'react'

const LocalStorage = () => {

    const [person, setPerson] = useState("");
    const [people,setPeople] = useState([]);

    const addPeople = (e) =>{
        
        e.preventDefault();

        const data = {
            id: Math.floor(Math.random()*10),
            name: person
        }

        setPeople([...people,data]);
        localStorage.setItem("people",JSON.stringify([...people,data]));
        setPerson("");
    }


    const removePeople = (e) =>{
        e.preventDefault();

        setPeople([]);
        localStorage.clear();
    }

    const list = JSON.parse(localStorage.getItem("people"));


    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Add poeple" onChange={(e)=>setPerson(e.target.value)} value={person}/>
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
                {list && list.map(p => (
                    <div className="card" key={p.key}>
                        <h2>{p.name}</h2>
                    </div>
                ))}
                
            </div>

            
        </div>
    )
}

export default LocalStorage
