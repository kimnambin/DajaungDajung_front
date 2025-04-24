import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import UserInfos from './pages/userInfos';
import ItemsCreate from './pages/ItemsCreate/ItemsCreate';
import ItemsSearch from './pages/ItemsSearch/ItemsSearch';
import Items from './pages/Items/Items';
import ItemsEdit from './pages/ItemsEdit/ItemsEdit';

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<UserInfos />} />
          <Route path="/items/create" element={<ItemsCreate />} />
          <Route path="/items" element={<ItemsSearch />}/>
          <Route path="/items/:id" element={<Items />} />
          <Route path="/items/edit/:id" element={<ItemsEdit />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;