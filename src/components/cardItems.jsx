import { useState } from "react"
import './cardItems.css'
import defaultImage from '../assets/default_item_image.jpg'

export default function CardItems(title, price, date) {
  return (
    <>
      <div className="card">
        <div className="cardImage">
          <img src={defaultImage} />
        </div>
        <div className="cardTitle">
          <p>{title}</p>
        </div>
        <div className="cardInfos">
          <div>
            <p className="price">{price}원</p>
            <p className="date">{date}일 전</p>
          </div>
        </div>
      </div>
    </>
  )
}
