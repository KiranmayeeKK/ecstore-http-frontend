
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//import header
import Header from './Header/Header.js'

//import  all the pages from the pages folder to add them to page routing
import Register from './Pages/Register.js'
import Home from './Pages/Home.js'
import Checkout from './Pages/Checkout/Checkout.js'
import Payment from './Pages/Checkout/Payment.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
         {/* Routes pages based on url path */}
        <Switch> 
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          {/* Routes to home page if no matching path is found */}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
