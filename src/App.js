import { Routes, Route } from 'react-router-dom';
import './App.css';
import { APITest } from './pages/apiTest';
import { UserFeedPage } from './pages/userFeed/userFeed';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<UserFeedPage />}/>
      <Route path='/test' element={<APITest />}/>

     </Routes>
    </div>
  );
}

export default App;
