// App.js

import React from "react";

import "./App.css";
import Home from "./components/home";
import team from "./components/team";
import Dashboard from "./components/agroform/dashboard";
import about from "./components/about";
import contact from "./components/contact";
import { Switch, Route } from "react-router-dom";
import Maintenance from "./components/maintenance";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getLang = this.getLang.bind(this);
    this.state = {
      lang: "de",
      site: "index"
    };
  }
  getLang(language) {
    this.setState({
      lang: language,
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Maintenance} />
          <Route
            exact
            path="/home"
            render={(props) => (
              <Home
                {...props}
                lang={this.state.lang}
                handleLang={this.getLang}
              />
            )}
          />
          <Route exact path="/team" component={team} selectedTab="team" />
          <Route exact path="/agroform" render={(props) => (
              <Dashboard
                {...props}
                lang={this.state.lang}
                site='index'
                handleLang={this.getLang}
              />
            )}
          />
          <Route exact path="/agroform/valentia" render={(props) => (
              <Dashboard
                {...props}
                lang={this.state.lang}
                site='valentia'
                handleLang={this.getLang}
              />
            )}
          />
          <Route exact path="/agroform/crozier" render={(props) => (
              <Dashboard
                {...props}
                lang={this.state.lang}
                site='crozier'
                handleLang={this.getLang}
              />
            )}
          />
          <Route exact path="/agroform/bolt" render={(props) => (
              <Dashboard
                {...props}
                lang={this.state.lang}
                site='bolt'
                handleLang={this.getLang}
              />
            )}
          />
          <Route exact path="/agroform/hurler" render={(props) => (
              <Dashboard
                {...props}
                lang={this.state.lang}
                site='hurler'
                handleLang={this.getLang}
              />
            )}
          />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/about" component={about} />
        </Switch>
      </>
    );
  }
}
