import { use, useState } from 'react';

import './userInfo.css';
import profileImage from '../assets/default_image.jpg';

export default function UserInfo() {
  let [nickname, setNickname] = useState('닉네임');
  let [openDate, setOpenDate] = useState('10');
  let [sellCount, setSellCount] = useState('1');
  let [description, setDescription] = useState(
    `안녕하세요\n살펴보고 가세요\n감사합니다.
    `
  )

  return (
    <div className="userInfo">
      <div className='profilebox'>
        <img className='profileImage' src={profileImage} />
      </div>
      <div className='infobox'>
        <div>
          <h2 className='nickname'>{nickname}</h2>
          <div className='list-items'>
            <p className='option'>상점오픈일</p>
            <p>{openDate}일 전</p>
          </div>
          <div className='list-items'>
            <p className='option'>상품판매</p>
            <p>{sellCount} 회</p>
          </div>
          <div className='profileDescription'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
