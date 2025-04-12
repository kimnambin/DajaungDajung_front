import { Outlet, Route, Routes } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar'
import style from './myPage.module.css'
import UserInfo from '../../components/userInfo/userInfo'

export default function MyPage() {
  return (
    <div className={style.myPage}>
      <Sidebar />
      <Outlet />
    </div>
  )
}
