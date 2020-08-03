import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome';
import CharCreation from './components/CharCreation';
import Battle from './components/Battle';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <link rel="stylesheet" type="text/css" href="components/App.css" />
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Welcome} exact/>
             <Route path="/CharCreation" component={CharCreation}/>
             <Route path="/battle" component={Battle}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;