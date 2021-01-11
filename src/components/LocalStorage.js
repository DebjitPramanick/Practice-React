import React,{useState} from 'react'

const LocalStorage = () => {

    const [person, setPerson] = useState("");
    const [key, setKey] = useState("");
    const people = [];

    const addPeople = (e) =>{

        e.preventDefault();

        const data =
            {
                name: person,
                key: key
            };
        
        if(key && person){
            people.push((people) => (
                [...people,data]
            ));
        
            setKey("");
            setPerson("");
            localStorage.setItem("people",JSON.stringify(people));
        }
        
        console.log(people);

    }

    const removePeople = (e) =>{
        e.preventDefault();

        localStorage.clear();
    }

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

            
        </div>
    )
}

export default LocalStorage
