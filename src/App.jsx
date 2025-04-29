import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
<<<<<<< HEAD
import UserInfos from './pages/userInfos/userInfos';
import ItemsCreate from './pages/items/ItemsCreate';
import ItemsSearch from './pages/items/ItemsSearch';
import ItemsDetail from './pages/items/ItemsDetail';
import ItemsEdit from './pages/items/ItemsEdit';
=======
import UserInfos from './pages/UserInfos/userInfos';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import FindId from './pages/FindId/FindId';
import ResetPwd from './pages/ResetPwd/ResetPwd';
import NewPwd from './pages/NewPwd/NewPwd';
import DajungDajung from './pages/MainHome/DajungDajung';
>>>>>>> c3fd6a58736156c21e3becd25da735f0b833db89

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<UserInfos />} />
<<<<<<< HEAD
          <Route path="/items/create" element={<ItemsCreate />} />
          <Route path="/items" element={<ItemsSearch />}/>
          <Route path="/items/:id" element={<ItemsDetail />} />
          <Route path="/items/edit/:id" element={<ItemsEdit />} />
=======
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/resetpwd" element={<ResetPwd />} />
          <Route path="/newpwd" element={<NewPwd />} />
          <Route path="/dajungdajung" element={<DajungDajung />} />
>>>>>>> c3fd6a58736156c21e3becd25da735f0b833db89
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> c3fd6a58736156c21e3becd25da735f0b833db89
