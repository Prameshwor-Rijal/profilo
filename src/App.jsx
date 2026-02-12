import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { ProtectedRoute } from './components/routing/ProtectedRoute';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard'
        element={<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>} />
    </Routes>
  );
}

export default App;
