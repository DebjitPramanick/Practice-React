import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {firebaseDB} from "./Firebase"

const Users = () => {

    const [users, setUsers] = useState({});

    useEffect(() => {
        firebaseDB.child('users').on('value',snapshot => {
            if(snapshot.val()){
                setUsers({
                    ...snapshot.val()
                })
            }
        })
    }, [])

    return (
        <div className="container">
            <Link to="/adduser">
               <button className="btn">
                    Add User
                </button> 
            </Link>
            
            <div className="grid-container">
                {Object.keys(users).map(id => (
                    <div className="card" key={id}>
                        <div className="profile-pic">
                            <img src={users[id].image} alt=''></img>
                        </div>
                        <h2>{users[id].name}</h2>
                        <h8>{users[id].phone}</h8>
                        <h3>{users[id].age}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users
