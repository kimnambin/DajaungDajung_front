import React, { useState } from 'react';
import './Comments.css';
import delete_btn from '../../../assets/ic_x.svg';
import { getImgSrc } from '../../../utils/image';
import { authRequest } from '../../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Comments = ({ comments, item_id, onCommentAdded }) => {
    const navigate = useNavigate();

    const [newComment, setNewComment] = useState("");
    
    const addComment = async () => {
        if (!newComment.trim()) return;

        try {
            await authRequest({
                method: 'post',
                url: `/comments/${item_id}`,
                data: { contents: newComment },
                navigate
            });
            setNewComment("");
            onCommentAdded();
        }  catch (error) {
            console.log('댓글 추가 에러 : ', error);
        }
    };
    
    const deleteComment = async (comment_id) => {
        try {
            const confirmDelete = window.confirm('댓글을 삭제하시겠습니까?');
            if(!confirmDelete) return;
            
            await authRequest({
                method: 'delete',
                url: `/comments/${comment_id}`,
                navigate,
            });
            onCommentAdded();
        }  catch (error) {
            if (error.response?.status === 403) {
                alert('본인의 댓글만 삭제할 수 있습니다.');
            } else if (error.response?.status === 401) {
                console.log('댓글 삭제 권한 없음');
            } else {
                console.error('댓글 삭제 에러:', error);
            }
        }
    }

    const handleComment = () => {
        addComment();
    }

    const handleDeleteComment = (comment_id) => {
        deleteComment(comment_id);
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
                        <img src={delete_btn} onClick={() => handleDeleteComment(comment.id)}/>
                    </div>
                ))}
            </div>
        </div>
    );
} 

export default Comments;