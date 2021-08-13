import React from 'react';
import Dashboard from './components/Dashboard';
import { Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
