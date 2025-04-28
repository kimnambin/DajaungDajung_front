import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import UserInfos from './pages/userInfos/userInfos';
import ItemsCreate from './pages/items/ItemsCreate';
import ItemsSearch from './pages/items/ItemsSearch';
import ItemsDetail from './pages/items/ItemsDetail';
import ItemsEdit from './pages/items/ItemsEdit';

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<UserInfos />} />
          <Route path="/items/create" element={<ItemsCreate />} />
          <Route path="/items" element={<ItemsSearch />}/>
          <Route path="/items/:id" element={<ItemsDetail />} />
          <Route path="/items/edit/:id" element={<ItemsEdit />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;