import Logo from '../../assets/Logo.png'
import searchIcon from '../../assets/searchIcon.png'
import { useState } from 'react'
import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  let [login, setLogin] = useState('로그인');
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchInput.trim === '') return;
    navigate(`/items?q=${encodeURIComponent(searchInput.trim())}`);
  };

  return (
    <nav>
      <div className={styles.container}>
        <Link to='/dajungdajung' className={styles.logo}>
          <img src={Logo} className={styles.logo} />
        </Link>
        <form className={styles.searchBox} onSubmit={handleSearch}>
          <input 
            placeholder='검색어를 입력하세요'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <img className={styles.searchIcon} src={searchIcon} alt='검색' onClick={handleSearch}/>
        </form>
        <div className={styles.navItems}>
          <Link to='/' className={styles.chating}>채팅하기</Link>
          <Link to='/items/create' className={styles.selling}>판매하기</Link>
          <Link to='/login' className={styles.login}>{login}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;
