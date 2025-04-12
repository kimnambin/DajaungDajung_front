import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import UserInfos from './pages/UserInfos/userInfos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage/myPage';
import UserInfo from './components/userInfo/userInfo';
import UpdateInfo from './components/updateInfo/UpdateInfo';
import Unsubscribe from './pages/unsubscribe/Unsubscribe';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/store' element={<UserInfos />} />
        <Route path='/users' element={<MyPage />}>
          <Route path='mypage' element={<UserInfo />} />
          <Route path='mypage/update' element={<UpdateInfo />} />
          <Route path='unsubscribe' element={<Unsubscribe />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
