import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import Homepage from './main/homepage/Homepage'
import Footer from './components/footer/Footer'
import './App.scss';
import Productdetail from './components/productdetail/Productdetail'
import Card from './components/card/card'
import Product from './main/product/Product';
import ContextAPI from './components/contextapi/counterCart'
import Compare from './components/compare/compare'
import Personal from './main/personal/Personal'
import BackToTop from 'react-back-to-top-button'
import {UpCircleTwoTone} from '@ant-design/icons/'


function App() {
  return (
    <ContextAPI>
          <Router>
            <Navbar/>
            <Switch>
              <Route path='/' component = {Homepage} exact></Route>
              <Route path='/card' component = {Card} ></Route>
              <Route path='/product' exact component = {Product} ></Route>
              <Route path='/casimo' exact component = {Personal} ></Route>
              <Route path='/product/:id/:id1/:id2' component = {Productdetail}></Route>
              <Route path='/compare/:id/:id1/:id2' exact component = {Compare} ></Route>
              <Route path='/setting' ></Route>
              <Route path='/thank' ></Route>
              <Route path='/:somestring' ></Route>
            </Switch>
          </Router>
          <BackToTop
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
              >
                <UpCircleTwoTone style={{fontSize: '40px'}}/>
              </BackToTop>
        <Footer/> 
    </ContextAPI>
  );
}

export default App;
// style={{backgroundColor: '#F5F8FD'}}