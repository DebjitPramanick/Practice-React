import React,{useState} from 'react'

const LocalStorage = () => {

    const [person, setPerson] = useState("");
    const [people,setPeople] = useState(JSON.parse(localStorage.getItem("people")) || []);

    const addPeople = (e) =>{
        
        e.preventDefault();

        if(person.length < 10){
            const data = {
                id: Math.floor(Math.random()*10),
                name: person
            }

            setPeople([...people,data]);
            localStorage.setItem("people",JSON.stringify([...people,data]));
            setPerson("");
        }

    }


    const removePeople = (e) =>{
        e.preventDefault();

        setPeople([]);
        localStorage.clear();
    }

    const list = JSON.parse(localStorage.getItem("people"));

    const remove = (id) =>{
        let newList = list.filter((x) => x.id !== id);
        localStorage.setItem("people",JSON.stringify(newList));
        setPeople(newList);
    }

    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Enter name of person (Less than 10 letters)" onChange={(e)=>setPerson(e.target.value)} value={person}/>
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
                    <div className="card" key={p.id}>
                        <h2>{p.name}</h2>
                        {<button className="btn2" onClick={() => remove(p.id)}>Remove</button>}
                    </div>
                ))}
                
            </div>

            
        </div>
    )
}

export default LocalStorage
