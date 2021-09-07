// App.js
 
import React, { Component } from 'react';
import './App.css';
import home from './components/home';
import team from './components/team';
import portfolio from './components/portfolio';
import about from './components/about';
import contact from './components/contact';
import maintenance from './components/maintenance';
import { Switch, Route } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
  
       <Switch>
          <Route exact path='/' component={maintenance}/>
          <Route exact path='/home' component={home}/>
          <Route exact path='/team' component={team}/>
          <Route exact path='/portfolio' component={portfolio}/>
          <Route exact path='/contact' component={contact}/>
          <Route exact path='/about' component={about}/>
        </Switch>

    );
  }
}
 
export default App;