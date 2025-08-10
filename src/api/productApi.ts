import axios from 'axios';
const { VITE_BACK_URL } = import.meta.env;
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const fetchProductList = async () => {
  const response = await axios.get(VITE_BACK_URL, {
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420',
    },
    withCredentials: true,
  });

  const data = Array.isArray(response.data) ? response.data : [];

  return data.map((item) => ({
    id: item.id,
    price: item.price,
    createdAt: dayjs(item.createdAt).fromNow(),
    imgId: item.imgId,
    title: item.title,
  }));
};
