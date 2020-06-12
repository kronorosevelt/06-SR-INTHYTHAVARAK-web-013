import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


import Main from './Component/Main';
import Menu from './Component/Menu';
import Add from './Component/Add';
import Update from './Component/Update';
function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component ={Main}/>
          <Route path="/add" component={Add}/>
          <Route path="/update" component={Update}/>

        </Switch>
      </Router>
    </div>
  );
}
export default App;