import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <main className='py-3'>
          <Container>          
            <Route path='/login' component={LoginScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route exact path='/' component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
