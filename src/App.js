import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Layout from './components/Layout';
import Customers from './components/Customers';
import Payments from './components/Payments';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Login Route */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />

        {/* Routes Wrapped with Layout (with Navbar) */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute>
                <Customers />
              </PrivateRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <PrivateRoute>
                <Payments />
              </PrivateRoute>
            }
          />
        </Route>

        {/* Catch-All Route to Redirect to Dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;