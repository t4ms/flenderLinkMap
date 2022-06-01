// App.js

import React from "react";

import "./App.css";
import LinkMap from "./components/linkMap";
import AddLink from "./components/addLink";
import { Switch, Route } from "react-router-dom";
// import Maintenance from "./components/maintenance";

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
          {/* <Route exact path="/" component={Maintenance} /> */}
          <Route
            exact
            path="/"
            render={(props) => (
              <LinkMap
                {...props}
                lang={this.state.lang}
                handleLang={this.getLang}
              />
            )}
          />
          <Route
            exact
            path="/addLink"
            selectedTab="addLink"
            render={(props) => (
              <AddLink
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
