import React from 'react'
import {Link} from 'react-router-dom'

const Users = () => {

    return (
        <div className="container">
            <Link to="/adduser">
               <button className="btn">
                    Add User
                </button> 
            </Link>
            
            <div className="grid-container">
                <div className="card">
                    fdqfffq
                </div>
                <div className="card">
                    fdqfffq
                </div>
            </div>
        </div>
    )
}

export default Users
