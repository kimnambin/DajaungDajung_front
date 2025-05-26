import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import {ProductProps} from '../../types/product.model';
import './DajungDajung.css';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {fetchProductList} from '../../api/productApi';

dayjs.extend(relativeTime);
dayjs.locale('ko');

const bannerImages = [banner1, banner2];
const ITEMS_PER_PAGE = 12;

const DajungDajung = () => {
  const [showProducts, setShowProducts] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);

  const queryClient = useQueryClient();
  const {data: products = [], isLoading: isQueryLoading} = useQuery({
    queryKey: ['getProduct'],
    queryFn: fetchProductList,
  });

  // 위치가 하단 시 호출
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreItems();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
      observer.disconnect();
    };
  }, [hasMore, showProducts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex(prev => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 초기 데이터
  useEffect(() => {
    if (products.length > 0) {
      const start = 0;
      const end = ITEMS_PER_PAGE;
      const nextItems = products.slice(start, end);

      setShowProducts(nextItems);
      setCurrentPage(2);
      setHasMore(end < products.length);
    }
  }, [products]);

  // 다음 데이터
  const loadMoreItems = () => {
    if (isLoading || isQueryLoading) return;
    setIsLoading(true);

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const nextItems = products.slice(start, end);

    if (nextItems.length === 0) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }

    setShowProducts(prev => [...prev, ...nextItems]);
    setCurrentPage(prev => prev + 1);
    setHasMore(end < products.length);
    setIsLoading(false);
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
          {showProducts.length > 0 ? (
            showProducts.map(item => (
              <Link
                key={item.id}
                to={`/items/${item.id}`}
                className="product-card-link">
                <div className="product-card">
                  <img
                    className="card-image"
                    src={item.img}
                    alt="상품 이미지"
                  />
                  <div className="card-info">
                    <div className="card-name">{item.name}</div>
                    <div className="card-bottom"></div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-products">등록된 상품이 없습니다.</p>
          )}
        </div>

        {hasMore && (
          <div ref={observerRef} className="hasMore-Container">
            로딩 중...
          </div>
        )}

        {!hasMore && (
          <div className="hasMore-Container">마지막 상품입니다.</div>
        )}
      </div>
    </div>
  );
};

export default DajungDajung;
