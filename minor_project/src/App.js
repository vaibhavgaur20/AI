import React from 'react';
import Navbar from './component/Navbar.js'
import Slideshow from './component/Slideshow.js'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Carousel from './component/Multi_Items.js'
import Footer from './component/Footer.js'
import Product_page from './component/Product_Page.js'
import Search_Result_Page from './component/Search_Result.js'
import Home_Page from './component/Home_Page.js'
import Cart_page from './component/Cart_Page.js'
import {Provider} from 'react-redux'
import store from './store.js'
import Product_Page from './component/Product_Page.js';
import Login from './component/Login.js'
import Signup from './component/Signup.js'


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Navbar/> 
    <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
      <Route path="/" exact component={Home_Page}  />
      <Route path="/home" exact component={Home_Page} />
      <Route path="/cart" exact component={Cart_page} />
      <Route path="/search" exact component={Search_Result_Page} />
      {/* <Route path="/product" exact component={Product_page} /> */}
      <Route path="/product/:id" component={Product_Page} />
      

    </Switch>
    
      
      {/* <Product_page/> */}
      {/* <Cart_page/> */}
      {/* <Search_Result_Page/> */}
      <Footer/>
     
      


    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
