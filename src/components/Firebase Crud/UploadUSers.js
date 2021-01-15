import React, {useState} from 'react'

const UploadUSers = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();

    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Enter Name"
                onChange={(e)=>setName(e.target.value)}></input>
                <input type="number" placeholder="Enter Age"
                onChange={(e)=>setAge(e.target.value)}></input>
                <input type="number" placeholder="Enter Mobile No."
                onChange={(e)=>setPhone(e.target.value)}></input>
                <button className="btn">
                    Add This User
                </button>
            </form>
        </div>
    )
}

export default UploadUSers
