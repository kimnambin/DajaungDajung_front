import Logo from '../assets/Logo.png'
import searchIcon from '../assets/searchIcon.png'
import { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

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
          <p className='chating'>채팅하기</p>
          <p className='selling'>판매하기</p>
          <p className='login'>{login}</p>
        </div>
      </div>
    </nav>
  )
}

export default Header;
