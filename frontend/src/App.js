import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Index";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Navigation from "./Navbar";
import NotFound from "./pages/notFound";
// import Recent from "./pages/recent";
// import Progress from "./pages/xbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/articles" component={Articles} />
            <Route path="/article/:name" component={Article} />
            <Route component={NotFound} />
          </Switch>
          {/* <Route path="/recent" component={Recent} />
          <Route path="/xbox" component={Progress} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
