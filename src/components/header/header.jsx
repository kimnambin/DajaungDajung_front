import Logo from '../../assets/Logo.png';
import searchIcon from '../../assets/searchIcon.png';
import { useEffect, useState } from 'react';
import styles from './header.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [nickname, setNickname] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    setNickname(storedNickname || '');
    setShowDropdown(false);
  }, [location]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try {
      await fetch('https://b292-222-232-138-33.ngrok-free.app/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // 서버에서 토큰 인증에 필요
        },
        credentials: 'include', // 쿠키 무효화 함께 진행
      });
    } catch (error) {
      console.error('서버 로그아웃 실패:', error);
    }

    // 클라이언트 상태 초기화
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    setNickname('');
    navigate('/dajungdajung');
  };

  return (
    <nav>
      <div className={styles.container}>
        <Link to='/dajungdajung' className={styles.logo}>
          <img src={Logo} className={styles.logo} alt="로고" />
        </Link>

        <form className={styles.searchBox} method='post'>
          <input placeholder='검색어를 입력하세요' />
          <img className={styles.searchIcon} src={searchIcon} alt="검색" />
        </form>

        <div className={styles.navItems}>
          <Link to='/' className={styles.chating}>채팅하기</Link>
          <Link to='/items/create' className={styles.selling}>판매하기</Link>

          {nickname ? (
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className={styles.nickname}>{nickname}</span>
              {showDropdown && (
                <div className={styles.dropdown}>
                  <Link to='/mypage' className={styles.dropdownItem}>마이페이지</Link>
                  <button className={styles.dropdownItem} onClick={handleLogout}>로그아웃</button>
                </div>
              )}
            </div>
          ) : (
            <Link to='/signin' className={styles.login}>로그인</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
