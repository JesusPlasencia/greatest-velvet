// src/components/Layout.js
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Outlet /> {/* Render the matched child routes */}
    </div>
  );
};

export default Layout;
