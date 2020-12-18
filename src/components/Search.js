import React from 'react'
import {data} from "../Data"

const Search = () => {
    const [users,setUser] = React.useState(data);
    const [search,setSearch] = React.useState("");

    const filteruser = users.filter((user)=>{
        return user.name.toLowerCase().includes(search.toLowerCase());
    });



    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Search poeple" onChange={e => setSearch(e.target.value)}/>
            </form>

            <div className="cardContainer">
                {filteruser.map((user)=>{
                return(
                    <div className="card" key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.age}</p>
                    </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Search
