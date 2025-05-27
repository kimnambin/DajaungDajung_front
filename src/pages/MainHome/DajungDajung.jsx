import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

import './DajungDajung.css';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import {getImgSrc} from '../../utils/image';
const {VITE_BACK_URL} = import.meta.env;

dayjs.extend(relativeTime);
dayjs.locale('ko');

const bannerImages = [banner1, banner2];
const ITEMS_PER_PAGE = 12;

const DajungDajung = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bannerIndex, setBannerIndex] = useState(0);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex(prev => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await axios.get(VITE_BACK_URL, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
        withCredentials: true,
      });

      console.log('응답 확인:', response.data);

      const data = Array.isArray(response.data) ? response.data : [];

      const formattedData = data.map(item => ({
        id: item.id,
        name: item.title,
        price: item.price,
        time: dayjs(item.created_at).fromNow(),
        img: item.img_id, // 추후 실제 이미지로 교체
      }));

      setProducts(formattedData);
    } catch (error) {
      console.error('상품 목록 불러오기 실패:', error);
      setProducts([]);
    }
  };

  return (
    <div className="dajung-container">
      <div className="banner-box">
        <Link to="/signin">
          <img
            src={bannerImages[bannerIndex]}
            alt="배너 이미지"
            className="banner-img"
            style={{cursor: 'pointer'}}
          />
        </Link>
      </div>

      <div className="product-section">
        <h2 className="section-title">최근 등록된 상품</h2>

        <div className="product-grid">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map(item => (
              <Link
                key={item.id}
                to={`/items/${item.id}`} // 프론트 상세 페이지로 이동
                className="product-card-link">
                <div className="product-card">
                  <img
                    className="card-image"
                    src={getImgSrc(item.img)}
                    alt="상품 이미지"
                  />
                  <div className="card-info">
                    <div className="card-name">{item.name}</div>
                    <div className="card-bottom">
                      <div className="card-price">
                        {Number(item.price).toLocaleString()}원
                      </div>
                      <div className="card-time">{item.time}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-products">등록된 상품이 없습니다.</p>
          )}
        </div>

        <div className="pagination">
          <button
            className="arrow"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
            {'<'}
          </button>
          {Array.from({length: totalPages}, (_, i) => i + 1).map(n => (
            <button
              key={n}
              className={`page-number ${n === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(n)}>
              {n}
            </button>
          ))}
          <button
            className="arrow"
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))
            }>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DajungDajung;
