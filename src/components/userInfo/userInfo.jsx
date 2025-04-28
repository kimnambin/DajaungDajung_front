import { use, useState } from 'react';

import styles from './userInfo.module.css';
import profileImage from '../../assets/default_image.jpg';

export default function UserInfo() {
  let [nickname, setNickname] = useState('닉네임');
  let [openDate, setOpenDate] = useState('10');
  let [sellCount, setSellCount] = useState('1');
  let [description, setDescription] = useState(
    `안녕하세요\n살펴보고 가세요\n감사합니다.
    `
  )

  return (
    <div className={styles.userInfo}>
      <div className={styles.profilebox}>
        <img className={styles.profileImage} src={profileImage} />
      </div>
      <div className={styles.infobox}>
        <div>
          <h2 className={styles.nickname}>{nickname}</h2>
          <div className={styles.listItems}>
            <p className={styles.option}>상점오픈일</p>
            <p>{openDate}일 전</p>
          </div>
          <div className={styles.listItems}>
            <p className={styles.option}>상품판매</p>
            <p>{sellCount} 회</p>
          </div>
          <div className={styles.profileDescription}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div >
  )
}
