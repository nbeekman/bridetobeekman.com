import React from 'react';
import Container from 'js/components/layout/Container';
import Header from 'js/components/layout/Header';
import Redrocks from 'js/components/redrocks/Redrocks';

const Main = () => (
  <Container>
    <Header />
    <div style={ { marginTop: '100px' } }>
      <Redrocks />
    </div>
  </Container>
);

export default Main;
