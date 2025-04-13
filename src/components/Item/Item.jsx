import React from 'react';
import './Item.css';
import sampleImg from '../../assets/sampleImg.svg';
import { getDaysAgo } from '../../utils/date';
const Item = ({item}) => {
    return (
        <div className='item_container'>
            <img src={sampleImg} width={220}/>
            <p className='item_title'>{item.title}</p>
            <div className='item_subContent'>
                <p className='item_price'>{item.price}원</p>
                <p className='item_date'>{getDaysAgo(item.postedAt)}</p>
            </div>
        </div>
    )
}

export default Item;