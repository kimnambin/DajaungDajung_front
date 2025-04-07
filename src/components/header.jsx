import Logo from '../assets/Logo.png'
import { useState } from 'react';


function Header() {
  let [login, setLogin] = useState('로그인');
  return (
    <nav>
      <img src={Logo} className='logo' />
      <form className='searchBox' method='post'>
        <input placeholder='검색어를 입력하세요' />
      </form>
      <p>채팅하기</p>
      <p>판매하기</p>
      <p>{login}</p>
    </nav>
  )
}

export default Header;
