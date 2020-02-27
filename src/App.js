import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './components/Index'
import CardInfo from './components/cards/CardInfo'
import {Provider} from './context'
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
          <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route exact path="/cards/:id" component={CardInfo}></Route>
              </Switch>
            </div>
            <Footer />
      </Router>
    </Provider>
  );
}

export default App;
