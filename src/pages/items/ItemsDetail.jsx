import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemDetail from '../../components/items/itemDetail/ItemDetail';

const ItemsDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`https://afe5-58-77-32-216.ngrok-free.app/items/${id}`, {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
          withCredentials: true,
        });

        setItem(res.data.item); // 응답 구조에서 item만 추출
      } catch (err) {
        console.error('상세 상품 조회 실패:', err);
      }
    };

    fetchItem();
  }, [id]);

  // 로딩 중 혹은 오류 발생 시
  if (!item) return <div>로딩 중...</div>;

  return <ItemDetail item={item} />;
};

export default ItemsDetail;
