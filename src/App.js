import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilesPage from './pages/ProfilesPage';
import ProfileDetails from './components/ProfileDetails';
import AboutUs from './pages/AboutUs'; 
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

function App() {
  return (
    <body class="p-3 text-bg-dark">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfilesPage />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  </body>);
}

export default App;