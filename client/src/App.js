import './App.css';

import {
  BrowserRouter as Router,
  Switch,
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
  const user = true;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/register"> { user ? <Home /> : <Register />} </Route>
        <Route path="/login"> { user ? <Home />: <Login /> } </Route>
        <Route path="/create"> { user ? <Create /> : <Register/> } </Route>
        <Route path="/settings"> { user ? <Settings /> :<Register/> } </Route>
        <Route path="/post/:postId"> <Single /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
