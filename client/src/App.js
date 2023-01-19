import './App.css';

import { useContext } from 'react';
import { Context } from './context/Context';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Create from './pages/create/Create';
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single';

const App = () => {
  const {user} = useContext(Context);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user? <Home /> : <Register />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home /> :<Login /> } />
        <Route path="/create" element={ user ? <Create /> : <Register /> } />
        <Route path="/settings" element={ user ? <Settings /> : <Register /> } />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
