// App.js
 
import React, { Component } from 'react';
import './App.css';
import home from '../src/components/home';
import team from '../src/components/team';
import portfolio from '../src/components/portfolio';
import about from '../src/components/about';
import contact from '../src/components/contact';
import maintenance from '../src/components/maintenance';
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