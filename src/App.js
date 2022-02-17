// App.js

import React from "react";

import "./App.css";
import Home from "./components/home";
import Team from "./components/team";
import Imprint from "./components/imprint";
import Contact from "./components/contact";
import { Switch, Route } from "react-router-dom";
import Maintenance from "./components/maintenance";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getLang = this.getLang.bind(this);
    this.state = {
      lang: "de",
      site: "index",
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
          <Route
            exact
            path="/team"
            selectedTab="team"
            render={(props) => (
              <Team
                {...props}
                lang={this.state.lang}
                handleLang={this.getLang}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            selectedTab="contact"
            render={(props) => (
              <Contact
                {...props}
                lang={this.state.lang}
                handleLang={this.getLang}
              />
            )}
          />
          <Route
            exact
            path="/imprint"
            selectedTab="imprint"
            render={(props) => (
              <Imprint
                {...props}
                lang={this.state.lang}
                handleLang={this.getLang}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}
