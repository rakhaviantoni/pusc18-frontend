import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageTransition from 'react-router-page-transition';

import Home from "./home";
import About from "./about";
import Commissions from "./commissions";
import Downloads from "./downloads";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <PageTransition timeout={500}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/commissions" component={Commissions}/>
                <Route path="/downloads" component={Downloads} />
              </Switch>
            </PageTransition>
          )}
        />
      </Router>
    )
  }
}

export default App;
