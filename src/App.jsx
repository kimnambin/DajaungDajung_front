import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import UserInfos from './pages/userInfos';
import ItemCreate from './pages/Items/ItemCreate';

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<UserInfos />} />
          <Route path="/items/create" element={<ItemCreate />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;