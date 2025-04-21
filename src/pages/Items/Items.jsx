import React from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import data from '../../../dummyData.json';

const Items = () => {
    const {id} = useParams();
    const item = data.items.find((item) => item.id === parseInt(id));

    return (
        <ItemDetail item={item}/>
    )
}

export default Items;