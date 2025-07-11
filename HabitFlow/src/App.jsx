import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddHabit from './pages/AddHabit';
import StreakChart from './components/StreakChart'; // ✅ this must be imported

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddHabit />} />
        <Route path="/streak" element={<StreakChart />} /> {/* ✅ this must exist */}
      </Routes>
    </Router>
  );
}

export default App;
