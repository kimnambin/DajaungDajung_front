import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import UserInfos from './pages/UserInfos/userInfos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage/myPage';
import UserInfo from './components/userInfo/userInfo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/store' element={<UserInfos />} />
        <Route path='/users' element={<MyPage />}>
          <Route path='mypage' element={<UserInfo />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
