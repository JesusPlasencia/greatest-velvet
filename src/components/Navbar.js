// src/components/Navbar.js
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { HomeIcon, CreditCardIcon, UserGroupIcon, LogoutIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      {/* Left Section - Links */}
      <div className="flex items-center space-x-6">
        <NavLink
          to="/dashboard"
          className="flex items-center space-x-2 hover:text-gray-200"
        >
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/payments"
          className="flex items-center space-x-2 hover:text-gray-200"
        >
          <CreditCardIcon className="h-5 w-5" />
          <span>Payments</span>
        </NavLink>
        <NavLink
          to="/customers"
          className="flex items-center space-x-2 hover:text-gray-200"
        >
          <UserGroupIcon className="h-5 w-5" />
          <span>Customers</span>
        </NavLink>
      </div>

      {/* Right Section - Logout Icon */}
      <button onClick={handleLogout} className="hover:text-gray-200">
        <LogoutIcon className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
