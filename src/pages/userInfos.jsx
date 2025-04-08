import { useState } from "react";
import UserInfo from "../components/userInfo";
import './userInfos.css'
import CardItems from "../components/cardItems";
import dummyData from '../../dummyData.json'

export default function UserInfos() {
  let [itemNum, setItemNum] = useState('6');
  return (
    <>
      <UserInfo />
      <div className="salingBox">
        <p>상품</p>
        <p className="count">{itemNum}</p>
        <div className="itemList">
        </div>
      </div>
    </>
  )
}
