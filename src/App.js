import { Routes, Route } from 'react-router-dom';
import './App.css';
import { APITest } from './features/apiTest';
import { UserFeedPage } from './features/userFeed/userFeed';
import { LoginPage } from './features/auth/login';
import { BookmarksPage } from './features/bookmarks/bookmarks';
import { ExplorePage } from './features/explore/explore';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<UserFeedPage />}/>
      <Route path='/bookmarks' element={<BookmarksPage />}/>
      <Route path='/explore' element={<ExplorePage />}/>

      <Route path='/test' element={<APITest />}/>

      <Route path='/login' element={<LoginPage />}/>

     </Routes>
    </div>
  );
}

export default App;
