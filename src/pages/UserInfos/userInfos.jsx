import { useState } from "react";
import UserInfo from "../../components/userInfo/userInfo";
import styles from './userInfos.module.css';
import CardItems from "../../components/cardItem/cardItems";
import dummyData from '../../../dummyData.json';

export default function UserInfos() {
  const [dummies, setDummy] = useState(dummyData);

  let [itemNum, setItemNum] = useState(dummies.length);
  return (
    <>
      <UserInfo />
      <div className={styles.salingBox}>
        <p>상품</p>
        <p className={styles.count}>{itemNum}</p>
        <div className={styles.itemList}>
        </div>
        <div className={styles.salingItems}>
          {
            dummies.map((e) => (
              <CardItems title={e.title} price={e.price} date={e.date} />
            ))
          }
        </div>
      </div >
    </>
  )
}