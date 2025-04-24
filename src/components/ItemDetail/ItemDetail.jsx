import React from 'react';
import './ItemDetail.css';
import sampleImg from '../../assets/sampleImg.svg';
import { getDaysAgo } from '../../utils/date';
import unLikeIcon from '../../assets/ic_unlike.svg';
import likeIcon from '../../assets/ic_like.svg';
import Comments from '../Comments/Comments';

const ItemDetail = ({item}) => {
    const [isSeller,, setIsSeller] = React.useState(true);
    const [isLike, setIsLike] = React.useState(false);
    return (
        <>
        <div className='item_detail_container'>
            <div className='item_detail_left'>
                <img src={sampleImg} alt="Item" style={{borderRadius: `10px`}}/>
                <div className='item_seller_container'>
                    <div className='item_seller'>
                        <img src={sampleImg} alt="Item" width={64} style={{borderRadius: `100px`}}/>
                        <p>{item.seller}</p>
                    </div>
                    <button className='shop_btn'>상점 보러가기</button>
                </div>
            </div>

            <div className='item_detail_right'>
                <p className='item_detail_category'>{item.category}</p>
                <p className='item_detail_title'>{item.title}</p>
                <p className='item_detail_price'>{item.price}원</p>
                <p className='item_detail_date'>{getDaysAgo(item.postedAt)}</p>
                <p className='item_detail_info'>{item.description}</p>

                <div className="item_detail_btns_container">
                    <button className='item_detail_btn first_btn'>
                        <div className='item_detail_like_btn'>
                            <img src={isLike ? unLikeIcon : likeIcon} alt="Like" />
                            <p>좋아요</p>
                            <p className='like_count'>01</p>
                        </div>
                    </button>
                    {isSeller ? 
                        <button className='item_detail_btn mid_btn'>
                        수정하기
                        </button>
                     : 
                        <button className='item_detail_btn mid_btn'>
                        채팅하기
                        </button>
                    }
                    
                    {isSeller ? 
                        <button className='item_detail_btn last_btn'>
                        삭제하기
                        </button>
                     : 
                        <button className='item_detail_btn last_btn'>
                        구매하기
                        </button>
                    }
                </div>
            </div>
        </div>

        <div className='line' />

        <Comments />
        </>
    )
}

export default ItemDetail;