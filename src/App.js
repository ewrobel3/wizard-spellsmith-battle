import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome';
import CharCreation from './components/CharCreation';
import Battle from './components/Battle';
import Error from './components/Error';
import Navigation from './components/Navigation';
import P1Char from './components/P1Char';
import P2Char from './components/P2Char';
import P1Method from './components/P1Method';
 
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
             <Route path="/P1Char" component={P1Char} />
             <Route path="/P2Char" component={P2Char} />
             <Route path="/P1Method" component={P1Method} />
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;