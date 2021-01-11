import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>eCommerce</h1>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
