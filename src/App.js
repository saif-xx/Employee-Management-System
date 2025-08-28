import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateEmployee from './pages/CreateEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import DeleteEmployee from './pages/DeleteEmployee';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'; // Import custom CSS

function App() {
  // Initialize user state from localStorage (mock authentication)
  const [user, setUser] = useState(localStorage.getItem('userId'));
  // Mock employee data (in-memory; resets on refresh)
  const [employees, setEmployees] = useState([]);

  // Handle login: verify userId and password from localStorage
  const handleLogin = ({ userId, password }) => {
    const storedUserId = localStorage.getItem('userId');
    const storedPassword = localStorage.getItem('password');
    if (storedUserId === userId && storedPassword === password) {
      setUser(userId);
      return true; // Login successful
    }
    return false; // Login failed
  };

  // Handle signup: store userId and password in localStorage and update state
  const handleSignup = ({ userId, password }) => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId === userId) {
      alert('User ID already exists. Please choose a different one.');
      return;
    }
    localStorage.setItem('userId', userId);
    localStorage.setItem('password', password);
    setUser(userId);
  };

  // Handle logout: clear localStorage and reset user state
  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('password');
    setUser(null);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar with user ID and logout */}
        <NavbarComponent user={user} onLogout={handleLogout} />
        {/* Main content area */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home employees={employees} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
            <Route
              path="/create"
              element={
                <ProtectedRoute user={user}>
                  <CreateEmployee employees={employees} setEmployees={setEmployees} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/update"
              element={
                <ProtectedRoute user={user}>
                  <UpdateEmployee employees={employees} setEmployees={setEmployees} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/delete"
              element={
                <ProtectedRoute user={user}>
                  <DeleteEmployee employees={employees} setEmployees={setEmployees} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;