import defaultImage from '../../assets/default_item_image.jpg'
import style from './saleItemCard.module.css'

export default function SaleItemCard() {
  return (
    <div className={style.itemCard}>
      <img src={defaultImage} alt="itemImage" />
      <div>
        <div className={style.itemInfo}>
          <p>상품명</p>
          <div>
            <p className={style.itemPrice}>가격</p>
            <p className={style.itemDate}>날짜</p>
          </div>
        </div>
        <div className={style.buttons}>
          <button type="button">수정</button>
          <button type="button">삭제</button>
        </div>
      </div>
    </div>
  )
}
