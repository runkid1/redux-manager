import React, { Component } from "react";
import Login from "./Pages/Login/Login";
import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from 'react-router-dom'
import MainRouter from "./Pages/MainRouter/MainRouter";
import store from './store/index'
import "./AppRouter.css";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("store====",store.getState())
  }
  render() {
    return (
      <div>
        <Router>
          {/* 首页路由 */}
          <Route exact path="/" exact component={Login} />
          {/* 我的页面路由 */}
          <Route exact path="/MainRouter" component={MainRouter} />
        </Router>
        {/* <MainRouter/> */}
      </div>
    );
  }
}

export default AppRouter;
