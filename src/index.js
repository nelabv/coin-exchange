import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './components/Nav';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Overview from './components/Overview';
import LoginSection from './components/LoginSection';
import SignUpSection from './components/SignupSection';

const routing = (
  <Router>
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={LoginSection} />
      <Route path='/signup' component={SignUpSection} />
      <Route path='/currencies/:currency' component={Overview} />
    </div>
  </Router>
)

ReactDOM.render(
    routing, document.getElementById('root'));

reportWebVitals();