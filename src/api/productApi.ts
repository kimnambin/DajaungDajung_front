import axios from 'axios';

export const fetchProductList = async () => {
  // TODO : 추후 실제 API로 교체 예정
  const response = await axios.get(
    'https://webtoon-crawler.nomadcoders.workers.dev/today',
  );
  const data = Array.isArray(response.data) ? response.data : [];
  return data.map(item => ({
    id: item.id,
    name: item.title,
    img: item.thumb,
  }));
};
