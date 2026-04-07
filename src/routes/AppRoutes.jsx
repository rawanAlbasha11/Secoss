import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* Define your routes here */}
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRoutes;