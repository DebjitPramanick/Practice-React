import React, { useState,useRef } from 'react'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ReactCrop from 'react-image-crop';
//https://www.npmjs.com/package/react-image-crop
import 'react-image-crop/dist/ReactCrop.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';

const UploadImage = () => {

    const [src, setSrc] = useState('http://inexa-tnf.com/wp-content/uploads/2017/05/unknow-person.jpg');
    const [popup, setPopup] = useState(false);
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({aspect: 1/1});
    const [result, setResult] = useState();

    const fileInput = useRef(null)

    const displayChange = e => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setSrc(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        
        setPopup(true);
    }

    function getCroppedImg() {
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


    const closeCrop = () =>{
        setSrc('http://inexa-tnf.com/wp-content/uploads/2017/05/unknow-person.jpg');
        setPopup(false)
    }


    return (
        <div className="container">
            <h2>Upload Image</h2>
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
                onClick={()=>fileInput.current.click()}>
                    <AddPhotoAlternateIcon/>
                    <p>Select Image From Storage</p>
                </button>

                <button className="btn2"
                disabled={result? false : true}>
                    <CloudUploadIcon/>
                    <p>Upload Selected Image</p>
                </button>
            </div>

            
        </div>
    )
}

export default UploadImage
