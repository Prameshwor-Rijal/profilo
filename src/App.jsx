import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';

function App() {

  return (
    <div className="App">
      {/* <Profile/> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
