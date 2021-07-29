// App.js
 
import React, { Component } from 'react';
import './App.css';
import home from './components/Home';
import team from './components/Team';
import portfolio from './components/Portfolio';
import about from './components/About';
import contact from './components/Contact';
import Maintenance from './components/Maintenance';
import { Switch, Route } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
  
       <Switch>
          <Route exact path='/' component={Maintenance}/>
          <Route exact path='/home' component={home}/>
          <Route exact path='/team' component={team}/>
          <Route exact path='/portfolio' component={portfolio}/>
          <Route exact path='/contact' component={contact}/>
          <Route path='/about' component={about}/>
        </Switch>

    );
  }
}
 
export default App;