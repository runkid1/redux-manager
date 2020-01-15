import React, { Component } from "react";
import Login from "./Pages/Login/Login";
import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from 'react-router-dom'
import MainRouter from "./Pages/MainRouter/MainRouter";
import "./AppRouter.css";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          {/* 首页路由 */}
          <Route exact path="/login" exact component={Login} />
          {/* 我的页面路由 */}
          <Route exact path="/MainRouter" component={MainRouter} />
        </Router>
        {/* <MainRouter/> */}
      </div>
    );
  }
}

export default AppRouter;
