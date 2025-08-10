import './Item.css';
import sampleImg from '../../../assets/sampleImg.svg';
import { getDaysAgo } from '../../../utils/date';
import { useNavigate } from 'react-router-dom';
import { getImgSrc } from '../../../utils/image.js';
import { formatNumber } from '../../../utils/format';
import { Item as ItemProps } from '../../../types/item.model.js';

const Item = ({ item }: { item: ItemProps }) => {
  const navigate = useNavigate();

  return (
    <div
      className="item_container"
      onClick={() => navigate(`/items/${item.id}`)}
    >
      <img
        src={item.imgId ? getImgSrc(item.imgId) : sampleImg}
        width={220}
        height={220}
      />

      <p className="item_title">{item.title}</p>
      <div className="item_subContent">
        <p className="item_price">{formatNumber(item.price)}원</p>
        <p className="item_date">{getDaysAgo(item.createdAt)}</p>
      </div>
    </div>
  );
};

export default Item;
