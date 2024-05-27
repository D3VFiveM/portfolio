import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ModelPage from './components/ModelPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/model/:id" component={ModelPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
