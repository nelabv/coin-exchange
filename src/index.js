import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import theme from './styling/StyledElements/Theme';
import '../src/index.css';

import Home from './Home';
import Navbar from './components/Navbar';
import CoinOverview from './components/CoinOverview';

import reportWebVitals from './reportWebVitals';

const routing = (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route path='/currencies/:currency' component={CoinOverview} />
    </Router>
  </ThemeProvider>
)

ReactDOM.render(
    routing, document.getElementById('root'));

reportWebVitals();