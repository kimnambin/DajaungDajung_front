import React, { useState, useRef } from 'react';
import './Items.css'
import SampleImg from '../../assets/sampleImg.svg';

const ItemCreate = () => {
    const [preview, setPreview] = useState(SampleImg);
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    }

    return (
        <div className='item_create_container'>
            <h1 className='sell_title'>판매하기</h1>

            <section className='item_img_upload'>
                <img src={preview}></img>
                <button 
                    className='item_img_upload_btn'
                    type='button'
                    onClick={handleUploadClick}
                >
                    업로드
                </button>
                <input 
                    type='file'
                    accept='image/*'
                    style={{display: 'none'}}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </section>

            <section className='item_create_input_container'>
                <input className='item_create_input' placeholder='제목'/>
                <input className='item_create_input' placeholder='카테고리'/>
                <input className='item_create_input' placeholder='가격'/>
                <textarea className='item_create_input' placeholder='설명' style={{height: '200px', resize: 'vertical', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}/>
            </section>

            <div style={{display: 'flex', justifyContent: 'center'}}>
            <button className='item_create_btn'>작성 완료</button>
            </div>
        </div>
    )
}

export default ItemCreate;