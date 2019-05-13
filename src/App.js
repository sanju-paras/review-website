import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { License } from "./License";
import { NoMatch } from "./NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import styled from "styled-components";

const Root = styled.div``;

class App extends Component {
  render() {
    return (
      <Root>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/license" component={License} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Router>
      </Root>
    );
  }
}

export default App;
