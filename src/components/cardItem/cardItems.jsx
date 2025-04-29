import styles from './cardItems.module.css'
import defaultImage from '../../assets/default_item_image.jpg'
import { useNavigate } from 'react-router-dom'


export default function CardItems({ id, title, price, date }) {
  const navigate = useNavigate();
  const navigateToEachItem = (num) => {
    navigate(`/items/${num}`)
  }

  return (
    <>
      <div className={styles.card} onClick={() => navigateToEachItem(id)}>
        <div className={styles.cardImage}>
          <img src={defaultImage} />
        </div>
        <div className={styles.cardTitle}>
          <p>{title}</p>
        </div>
        <div className={styles.cardInfos}>
          <div>
            <p className={styles.price}>{price}원</p>
            <p className={styles.date}>{date}일 전</p>
          </div>
        </div>
      </div >
    </>
  )
}
