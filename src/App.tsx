import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ItemsCreate from './pages/items/ItemsCreate';
import ItemsSearch from './pages/items/ItemsSearch';
import ItemsDetail from './pages/items/ItemsDetail';
import ItemsEdit from './pages/items/ItemsEdit';
import Signin from './pages/SignIn/signin';
import Signup from './pages/Signup/Signup';
import FindId from './pages/FindId/FindId';
import ResetPwd from './pages/ResetPwd/ResetPwd';
import NewPwd from './pages/NewPwd/NewPwd';

import DajungDajung from './pages/MainHome/DajungDajung';
import UserInfos from './pages/UserInfos/userInfos';
import MyPage from './pages/MyPage/myPage';
import UpdateInfo from './components/updateInfo/UpdateInfo';
import Unsubscribe from './pages/unsubscribe/Unsubscribe';
import UploadItems from './pages/UploadItems/UploadItems';
import UserLikes from './pages/UserLikes/UserLikes';
import Chat from './pages/Chat/Chat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/store/:id" element={<UserInfos />} />
            <Route path="/items/create" element={<ItemsCreate />} />
            <Route path="/items" element={<ItemsSearch />} />
            <Route path="/items/:id" element={<ItemsDetail />} />
            <Route path="/items/edit/:id" element={<ItemsEdit />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/resetpwd" element={<ResetPwd />} />
            <Route path="/newpwd" element={<NewPwd />} />
            <Route path="/" element={<DajungDajung />} />
            <Route path="/users" element={<MyPage />}>
              <Route path="mypage" element={<MyPage />} />
              <Route path="mypage/update" element={<UpdateInfo />} />
              <Route path="unsubscribe" element={<Unsubscribe />} />
              <Route path="upload" element={<UploadItems />} />
              <Route path="likes" element={<UserLikes />} />
            </Route>
            <Route path="/chats" element={<Chat />} />
          </Routes>
        </QueryClientProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
