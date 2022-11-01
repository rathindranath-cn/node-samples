// react imports
import { Routes, Route } from "react-router-dom";

// CSS import
import 'bootstrap/dist/css/bootstrap.min.css';

// component imports
import Login from "./components/modules/users/auth/Login";
import Registration from './components/modules/users/auth/Registration';
import ForgotPassword from './components/modules/users/auth/ForgotPassword';
import Profile from './components/modules/users/auth/Profile';
import ChangePassword from './components/modules/users/auth/ChangePassword';
import Dashboard from "./components/pages/Dashboard";
import PlaceList from "./components/modules/Places/PlaceList";
import PlaceDetail from "./components/modules/Places/PlaceDetail";

// route components
import { PrivateRoute, PublicRoute } from './routes';

function App() {
  return (
    <Routes>
    {/* Login page route */}
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />

    {/* Registration page route */}
      <Route path="/register" element={<PublicRoute><Registration /></PublicRoute>} />

      {/* Dashboard page route */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
