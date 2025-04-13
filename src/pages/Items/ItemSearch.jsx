import React from 'react';
import './Items.css'
import { useLocation } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Item from '../../components/Item/Item';

const ItemSearch = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get('q');
    const category = queryParams.get('category');

    return (
        <div className='container'>
            <h1>내 주변 "{q}" 검색 결과</h1>
            <div className='search_container'>
                <Category selectedCategory={category}/>
                <Item />
            </div>
        </div>
    )
}

export default ItemSearch;