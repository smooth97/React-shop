import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Shop01 from './components/shops/Shop01';
import Shop02 from './components/shops/Shop02';
import Shop03 from './components/shops/Shop03';
import Shop04 from './components/shops/Shop04';
import Shop05 from './components/shops/Shop05';
import Shop06 from './components/shops/Shop06';
import Shop07 from './components/shops/Shop07';
import Shop08 from './components/shops/Shop08';
import Shop09 from './components/shops/Shop09';

//import data from 'MOCK_DATA.json';

function App() {    

//  const [datas, setDatas] = useState(data);

  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={About}/>
          <Route path="/Shop" component={Shop}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/Shop01" component={Shop01}/>
          <Route path="/Shop02" component={Shop02}/>
          <Route path="/Shop03" component={Shop03}/>
          <Route path="/Shop04" component={Shop04}/>
          <Route path="/Shop05" component={Shop05}/>
          <Route path="/Shop06" component={Shop06}/>
          <Route path="/Shop07" component={Shop07}/>
          <Route path="/Shop08" component={Shop08}/>
          <Route path="/Shop09" component={Shop09}/>
        </Switch>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
