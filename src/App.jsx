import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import ShipmentSearch from './components/ShipmentSearch';
import ProtectedRoute from './components/ProtectedRoute';

function Dashboard() {
  return (
    <div className="flex items-start">
      <Sidebar />
      <ShipmentSearch />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
      />
    </Routes>
  );
}

export default App;