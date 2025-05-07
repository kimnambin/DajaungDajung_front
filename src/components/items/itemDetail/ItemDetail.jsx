import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authRequest } from '../../../api/axiosInstance.js';
import { getComments } from '../../../api/commentsApi.js';
import { getItemDetail } from '../../../api/itemsApi.js';
import likeIcon from '../../../assets/ic_like.svg';
import unLikeIcon from '../../../assets/ic_unlike.svg';
import sampleImg from '../../../assets/sampleImg.svg';
import { getDaysAgo } from '../../../utils/date';
import { formatNumber } from '../../../utils/format';
import { getImgSrc } from '../../../utils/image.js';
import Comments from '../comments/Comments';
import './ItemDetail.css';

const ItemDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const baseURL = import.meta.env.VITE_BASE_URL;

    const [item, setItem] = useState({});
    const [seller, setSeller] = useState({});
    const [isLike, setIsLike] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [comments, setComments] = useState([]);

    const handleEdit = (id) => {
        navigate(`/items/edit/${id}`, { state: { item, isEdit: true } });
    }

    const fetchCommentData = async () => {
        try {
            const response = await getComments(id);
            setComments(response.data);
        }  catch (error) {
            console.log('댓글 조회 에러 : ', error);
        }
    };

    useEffect(() => {
        const fetchItemDetailData = async () => {
            try {
                const response = await getItemDetail(id);
                setItem(response.data.item);
                setSeller(response.data.user);
                setIsLike(response.data.item.liked === 'true');
                setIsSeller(response.data.item.seller === 'true');
            } catch (error) {
                console.log('상품 상세 조회 에러 : ', error);
            }
        };

        fetchItemDetailData();
        fetchCommentData();
    }, [id, baseURL]);

    
    const handleLikeButton = async (item_id) => {
        try {
            const method = isLike ? 'delete' : 'post';
            const url = `/users/likes/${item_id}`;
            await authRequest({ method, url, navigate });
            setIsLike(!isLike);
        } catch (error) {
            console.log('좋아요 처리 에러:', error.response?.data || error.message);
        }
    };

    return (
        <>
        <div className='item_detail_container'>
            <div className='item_detail_left'>
                <div className="img_wrapper">
                    <img src={item.img_id ? getImgSrc(item.img_id) : sampleImg} alt="Item" />  
                </div>
                <div className='item_seller_container'>
                    <div className='item_seller'>
                        <img src={getImgSrc(seller.image)} alt="Item" width={64} style={{borderRadius: `100px`}}/>
                        <p>{seller.seller}</p>
                    </div>
                    <button className='shop_btn'>상점 보러가기</button>
                </div>
            </div>

            <div className='item_detail_right'>
                <p className='item_detail_category'>{item.category}</p>
                <p className='item_detail_title'>{item.title}</p>
                <p className='item_detail_price'>{item?.price ? formatNumber(item.price) + '원' : ''}</p>
                <p className='item_detail_date'>{item?.create_at ? getDaysAgo(item.create_at) : ''}</p>
                <p className='item_detail_info'>{item.contents}</p>

                <div className="item_detail_btns_container">
                    <button className='item_detail_btn first_btn' onClick={() => handleLikeButton(item.id)}>
                        <div className='item_detail_like_btn'>
                            <img src={isLike ? likeIcon : unLikeIcon} alt="Like" />
                            <p>좋아요</p>
                            <p className='like_count'>{item.like}</p>
                        </div>
                    </button>
                    {isSeller ? 
                        <button className='item_detail_btn mid_btn' onClick={() => handleEdit(item.id)}>
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

        <Comments comments={comments} item_id={id} onCommentAdded={fetchCommentData}/>
        </>
    )
}

export default ItemDetail;