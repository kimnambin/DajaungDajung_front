import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import UserInfos from './pages/userInfos';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import FindId from './pages/FindId/FindId';
import ResetPwd from './pages/ResetPwd/ResetPwd';
import NewPwd from './pages/NewPwd/NewPwd';
import DajungDajung from './pages/MainHome/DajungDajung';

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<UserInfos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/resetpwd" element={<ResetPwd />} />
          <Route path="/newpwd" element={<NewPwd />} />
          <Route path="/dajungdajung" element={<DajungDajung />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
