import React, {useState,useRef} from 'react'
import {Link} from 'react-router-dom'


import {firebaseDB,storage} from "./Firebase"
import CircularProgress from '@material-ui/core/CircularProgress';
import 'react-image-crop/dist/ReactCrop.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ReactCrop from 'react-image-crop';

const UploadUSers = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();

    const [show,setShow] = useState(false);

    const addUser = e =>{
        e.preventDefault();

        setShow(true);

        const data = {
            image: imageURL,
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


    const [src, setSrc] = useState('http://inexa-tnf.com/wp-content/uploads/2017/05/unknow-person.jpg');
    const [popup, setPopup] = useState(false);
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({aspect: 1/1});
    const [result, setResult] = useState();
    const [imageName, setImageName] = useState('');
    const [imageURL, setImageURL] = useState('');

    const fileInput = useRef(null)

    const displayChange = e => {

        e.preventDefault();

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setSrc(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        setImageName(e.target.files[0].name);

        
        
        setPopup(true);
    }


    function getCroppedImg(e) {
        e.preventDefault();
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
 
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height,
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        setResult(base64Image);

        setPopup(false);
    }

    


    const imageUpload = e =>{
        e.preventDefault();
        const uploadTask = storage.ref(`images/${imageName}`).put(result);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
                storage.ref("images")
                .child(imageName)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                })
            }
        )
    }


    const closeCrop = () =>{
        setSrc('http://inexa-tnf.com/wp-content/uploads/2017/05/unknow-person.jpg');
        setPopup(false)
    }

    return (
        <div className="container">
            <form>

                <Link to="/firebasecrud">
                    <button className="btn">Go Back</button>
                </Link>

                <div className="img-container">
                {result? (
                    <img src={result} alt=""/>
                ):(
                    <img src={src} alt=""/>
                )}
                
            </div>

            <div className={popup?"pop-up-box" : "hide"}>
                <div className="cross-btn"
                onClick={() => closeCrop()}>
                    <CancelIcon/>
                </div>
                <div className="crop-field">
                    {src && (
                        <>
                            <ReactCrop src={src} onImageLoaded={setImage}
                            crop={crop} onChange={setCrop}/>
                            
                            <button className="crop-btn"
                            onClick={getCroppedImg}>
                                Crop Image
                            </button>
                        </>
                    )} 
                </div>
            </div>

            <input type="file" className="choose-file"
            accept="image/*" onChange={(e) => displayChange(e)}
            ref={fileInput}></input>

            <div className="btn-container">
                <button className="btn2"
                onClick={(e)=>{
                    e.preventDefault();
                    fileInput.current.click()
                }}>
                    <AddPhotoAlternateIcon/>
                    <p>Select Image From Storage</p>
                </button>

                <button className="btn2"
                disabled={result? false : true}
                onClick={(e) => imageUpload(e)}>
                    <CloudUploadIcon/>
                    <p>Upload Selected Image</p>
                </button>
            </div>

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
