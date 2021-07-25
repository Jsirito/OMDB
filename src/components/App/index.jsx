import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Content from "../Content";
import Movie from "../Movie/Movie";
import Header from "../Header/Header";
import Register from "../Register/Register";
import LogIn from "../LogIn/LogIn";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/movie/:id" exact component={Movie} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
