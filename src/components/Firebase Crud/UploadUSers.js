import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import firebaseDB from './Firebase'
import CircularProgress from '@material-ui/core/CircularProgress';

const UploadUSers = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();

    const [show,setShow] = useState(false);

    const addUser = e =>{
        e.preventDefault();

        setShow(true);

        const data = {
            name: name,
            age: age,
            phone: phone
        }

        firebaseDB.child('users').push(
            data,
            err => {
                if(err){
                    console.log(err);
                }
            }
        )

        setName('');

        setTimeout(() => {
            setShow(false)
        },2500);
    }

    return (
        <div className="container">
            <form>

                <Link to="/firebasecrud">
                    <button className="btn">Go Back</button>
                </Link>

                <input type="text" placeholder="Enter Name"
                onChange={(e)=>setName(e.target.value)}></input>
                <input type="number" placeholder="Enter Age"
                onChange={(e)=>setAge(e.target.value)}></input>
                <input type="number" placeholder="Enter Mobile No."
                onChange={(e)=>setPhone(e.target.value)}></input>


                <div className="btn-container">
                    <button className="btn"
                    onClick={(e)=>addUser(e)}>
                        Add This User
                    </button>

                    {show && <CircularProgress thickness={4.8} size="42px"/>}
                </div>
                
                
            </form>
        </div>
    )
}

export default UploadUSers
