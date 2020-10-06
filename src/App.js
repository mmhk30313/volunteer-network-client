import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Events from './Components/Events/Events';
import Blog from './Components/Blog/Blog';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import EventTasks from './Components/EventTasks/EventTasks';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/'>
              {/* <Header/> */}
              <Home/>
            </Route>
          </Switch>
          <Switch>
            <Route path='/home'>
              {/* <Header/> */}
              <Home/>
            </Route>
          </Switch>
          
          {/* After ending work all comment will be PrivateRoute */}
          <PrivateRoute exact path='/register/:id'>
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute exact path='/event-tasks'>
            <EventTasks/>
          </PrivateRoute>
            
          <Switch>
            <Route path='/login'>
              <Login/>
            </Route>
          </Switch>

          <Switch>
            <Route path='/admin' component={Admin}/>
          </Switch>

          <Switch>
            <Route path='/Donation'>
              <Donation/>
            </Route>
          </Switch>

          <Switch>
            {/* Joto Event ase all dekhate hobe... */}
            <Route path='/events'>
              <Events/>
            </Route>
          </Switch>

          <Switch>
            <Route path='/blog'>
              <Blog/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
