import Logo from '../assets/Logo.png'
import searchIcon from '../assets/searchIcon.png'
import { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  let [login, setLogin] = useState('로그인');
  return (
    <nav>
      <div className='container'>
        <img src={Logo} className='logo' />
        <form className='searchBox' method='post'>
          <input placeholder='검색어를 입력하세요' />
          <img className='searchIcon' src={searchIcon} />
        </form>
        <div className='nav-items'>
          <Link to='/' className='chating'>채팅하기</Link>
          <Link to='/items' className='selling'>판매하기</Link>
          <Link to='/login' className='login'>{login}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;
