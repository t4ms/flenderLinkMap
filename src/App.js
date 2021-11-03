// App.js
 
import React from 'react';

import './App.css';
import home from './components/home';
import team from './components/team';
import portfolio from './components/portfolio';
import about from './components/about';
import contact from './components/contact';
import maintenance from './components/maintenance';
import { Switch, Route } from 'react-router-dom';

 
export default function App () {
    return (
      <>
       <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/maintenance' component={maintenance}/>
          <Route exact path='/team' component={team} selectedTab='team'/>
          <Route exact path='/portfolio' component={portfolio}/>
          <Route exact path='/contact' component={contact}/>
          <Route exact path='/about' component={about}/>
        </Switch>
      </>

    );
  
}
 