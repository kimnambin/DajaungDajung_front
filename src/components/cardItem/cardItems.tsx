import { Item } from '../../types/item.model';
import { getDaysAgo } from '../../utils/date';
import { getImgSrc } from '../../utils/image';
import styles from './cardItems.module.css';
import { useNavigate } from 'react-router-dom';

interface CardItemsProps {
  item: Item;
}

export default function CardItems({ item }: CardItemsProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.card}
        onClick={() => navigate(`/items/${item.id}`)}
      >
        <div className={styles.cardImage}>
          <img src={getImgSrc(item.imgId)} />
        </div>
        <div className={styles.cardTitle}>
          <p>{item.title}</p>
        </div>
        <div className={styles.cardInfos}>
          <div>
            <p className={styles.price}>{item.price.toLocaleString()}원</p>
            <p className={styles.date}>{getDaysAgo(item.createdAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
