import React from 'react';
import Container from 'js/components/layout/Container';
import Header from 'js/components/layout/Header';
import Hero from 'js/components/hero/Hero';
import Welcome from 'js/components/welcome/Welcome';
import OurStory from 'js/components/ourstory/OurStory';
import Party from 'js/components/party/Party';
import Accommodations from 'js/components/accommodations/Accommodations';
import ThingsToDo from 'js/components/thingstodo/ThingsToDo';
import Registry from 'js/components/registry/Registry';
import Footer from 'js/components/layout/Footer';

const Main = () => (
  <Container>
    <Header />
    <div style={ { marginTop: '60px' } }>
      <Hero />
      <Welcome />
      <OurStory />
      <Party />
      <Accommodations />
      <ThingsToDo />
      <Registry />
    </div>
    <Footer />
  </Container>
);

export default Main;
