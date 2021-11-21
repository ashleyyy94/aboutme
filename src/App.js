import React from "react";
import Header from "./components/inc/Header";
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NFT from "./components/pages/NFT";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/collection">
            <NFT />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
