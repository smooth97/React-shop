import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Shop01 from './components/shops/Shop01';

//import data from 'MOCK_DATA.json';

function App() {    

//  const [datas, setDatas] = useState(data);

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={About}/>
          <Route path="/Shop" component={Shop}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/Shop01" component={Shop01}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
