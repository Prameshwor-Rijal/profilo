import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
