import React from 'react';
import styles from 'js/components/hero/styles/hero';

const Hero = () => (
  <div id="hero" style={ styles.container }>
    <div style={ styles.titleContainer }>
      <h1 style={ styles.title } className="amatic">Kaitlyn &amp; Nathan</h1>
      <h2 style={ styles.subTitle }>August 19, 2017</h2>
    </div>
  </div>
);

export default Hero;
