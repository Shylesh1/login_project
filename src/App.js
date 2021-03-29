import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './loginPage';
import ProfilePicturePage from './profilePicturePage';
import SignUpPage from './signUpPage';
import UserTableDetails from './userTableDetails';
import HeaderComponent from './headerComponent';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Switch>
          <Route path="/" exact render={({ history }) => <LoginPage  history={history} />}/>
          <Route path="/LoginPage/" render={({history})=> <LoginPage history={history}/>} />
          <Route path="/UserTableDetails/" render={({history,location})=> <UserTableDetails  history={history} location={location}/>} />
          <Route path="/SignUpPage/" render={({history})=> <SignUpPage history={history}/>} />
          <Route path="/ProfilePicturePage/" render={({history,location})=> <ProfilePicturePage  history={history} location={location}/>} />
          <Route path="/HeaderComponent/"  render={({history})=> <HeaderComponent history={history}/>} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
