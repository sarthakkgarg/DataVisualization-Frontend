import React from 'react';
import Dashboard from './components/Dashboard';
import Map from './components/Treemap/Map';
import { Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/" component={Map} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
