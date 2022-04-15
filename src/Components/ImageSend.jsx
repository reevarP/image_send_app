import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ImageSend = () => {
    const [imag, setImag] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/photos';
    async function getImageData() {
        let res = await fetch(url);
        let data = await res.json();
        let newData = [];
        for (let i = 0; i <= 11; ++i) {
            newData.push(data[i]);
        }
        setImag(newData);
    }

    const clickHandler = (event) => {
        const tempArray = selectedImages;
        let imgLink = event.target.currentSrc;
        const indexx = selectedImages.findIndex(e => e == imgLink);
        if (indexx >= 0) {
            tempArray.splice(indexx, 1);
        }
        else {
            tempArray.push(imgLink);
        }
        setSelectedImages([...tempArray]);
    }

    const postUrl = 'https://jsonplaceholder.typicode.com/photos';
    const sendHandler = () => {
        console.log('SENT');
        axios.post(postUrl, selectedImages).then((resp) => { console.log(resp) }).catch((error) => { console.log(error) });
        localStorage.setItem('Links', JSON.stringify(selectedImages));
    }

    useEffect(() => {
        getImageData();
    }, []);
    return (
        <div className='container'>
            <div className='container_body'>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {imag.map((curElem, index) => {
                        return <div className='image'><img onClick={(event) => clickHandler(event)} src={curElem.url} alt="" /></div>
                    })}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <h3>Selected Images: </h3>
                    {selectedImages.map((curElem, index) => {
                        return <h3 key={index}>{curElem}-</h3>
                    })}
                </div>
            </div>
            <button className='button' onClick={sendHandler}>Send Pictures to backend</button>
        </div>
    )
}

export default ImageSend