import React, { Component } from 'react';
import Login from './Pages/Login/Login'
import './AppRouter.css'

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Login></Login>
            </div>
         );
    }
}
 
export default AppRouter;