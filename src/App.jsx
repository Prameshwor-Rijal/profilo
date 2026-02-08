import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import Profile from './pages/Profile';
import { ProtectedRoute } from './components/routing/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard'
          element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
