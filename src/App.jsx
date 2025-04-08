import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import UserInfos from './pages/userInfos';

function App() {
  return (
    <>
      <Header />
      <UserInfos />
      <Footer />
    </>
  )
}

export default App
