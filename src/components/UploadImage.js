import React, { useState,useRef } from 'react'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const UploadImage = () => {

    const [src, setSrc] = useState('https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/55096766-stock-vector-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg?ver=6');
    const [image, setImage] = useState()

    const fileInput = useRef(null)

    const displayChange = e => {
        setImg(URL.createObjectURL(e.target.files[0]));
    }

    onload = (image) => {

    }


    console.log(fileInput)

    return (
        <div className="container">
            <h2>Upload Image</h2>
            <div className="img-container">
                <img src={img} alt="" className="img"/>
            </div>

            <input type="file" className="choose-file"
            accept="image/*" onChange={(e) => displayChange(e)}
            ref={fileInput}></input>

            <div className="crop-field">
                {src && (
                    <ReactCrop onImageLoaded={onload}/>
                )} 
            </div>

            <button className="btn3"
            onClick={()=>fileInput.current.click()}>
                <AddPhotoAlternateIcon/>
                <p>Select Image From Storage</p>
            </button>
        </div>
    )
}

export default UploadImage
