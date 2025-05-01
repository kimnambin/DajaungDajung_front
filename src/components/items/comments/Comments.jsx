import React from 'react';
import './Comments.css';
import delete_btn from '../../../assets/ic_x.svg';
import { getImgSrc } from '../../../utils/image';

const Comments = ({ comments }) => {
    return (
        <div className='comments_container'>
            
            <div className="comment_input_wrapper">
                <input placeholder='댓글을 입력해주세요.'/>
                <button>입력</button>
            </div>
            
            <div className='comment_container'>
                <div className='comments_title'>
                    <p className='comment_title_txt'>댓글</p>
                    <p className='comment_title_count'>{comments.length}개</p>
                </div>

                {comments.map((comment) => {
                    <div className="comment">
                        <img src={getImgSrc(comment.img_id)} width={50}/>
                        <div className="comment_txt_container">
                            <p className='comment_nickname'>{comment.nickname}</p>
                            <p className='comment_txt'>{comment.created_at}</p>
                        </div>
                        <img src={delete_btn}/>
                    </div>
                })}
            </div>
        </div>
    );
} 

export default Comments;