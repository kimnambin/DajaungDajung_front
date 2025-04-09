import styles from './cardItems.module.css'
import defaultImage from '../assets/default_item_image.jpg'

export default function CardItems({ title, price, date }) {
  return (
    <>
      <div className={styles.card}>
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
