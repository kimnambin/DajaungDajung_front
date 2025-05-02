import React, { useState } from 'react';
import './Comments.css';
import delete_btn from '../../../assets/ic_x.svg';
import { getImgSrc } from '../../../utils/image';
import axios from 'axios';

const Comments = ({ comments, item_id, onCommentAdded }) => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const token = import.meta.env.VITE_TOKEN;

    const [newComment, setNewComment] = useState("");
    
    const addComment = async () => {
        if (!newComment.trim()) return;

        try {
            await axios.post(`${baseURL}/comments/${item_id}`, 
                {
                    contents: newComment
                }, 
                {
                    headers: {
                        'ngrok-skip-browser-warning': '1233123',
                        ...(token && { Authorization: token }),
                    }
                }
            );
            setNewComment("");
            onCommentAdded();
        }  catch (error) {
            console.log('댓글 추가 에러 : ', error);
        }
    };

    const handleComment = () => {
        addComment();
    }

    return (
        <div className='comments_container'>
            
            <div className="comment_input_wrapper">
                <input 
                    placeholder='댓글을 입력해주세요.'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleComment}>입력</button>
            </div>
            
            <div className='comment_container'>
                <div className='comments_title'>
                    <p className='comment_title_txt'>댓글</p>
                    <p className='comment_title_count'>{comments.length}개</p>
                </div>

                {comments.map((comment) => (
                    <div className="comment">
                        <img src={getImgSrc(comment.img_id)} width={50} style={{borderRadius: '100px'}}/>
                        <div className="comment_txt_container">
                            <p className='comment_nickname'>{comment.nickname}</p>
                            <p className='comment_txt'>{comment.contents}</p>
                        </div>
                        <img src={delete_btn}/>
                    </div>
                ))}
            </div>
        </div>
    );
} 

export default Comments;