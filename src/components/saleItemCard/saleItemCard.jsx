import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/default_item_image.jpg'
import style from './saleItemCard.module.css'

export default function SaleItemCard({ id, name, price, date }) {
  const navigate = useNavigate();
  const navigateToEachItem = (num) => {
    navigate(`/items/${num}`)
  }
  return (
    <div className={style.itemCard}>
      <img onClick={() => navigateToEachItem(id)} src={defaultImage} alt="itemImage" />
      <div>
        <div className={style.itemInfo}>
          <p>{name}</p>
          <div>
            <p className={style.itemPrice}>{price.toLocaleString()}원</p>
            <p className={style.itemDate}>{date}일 전</p>
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
