import React from 'react';
import HeroPhoto from 'assets/images/blanket-looking.jpg';
import styles from 'js/components/hero/styles/hero';

const Hero = () => (
  <div id="hero" style={ Object.assign({ background: `url(${HeroPhoto}) no-repeat center center fixed` }, styles.container) }>
    <div style={ styles.titleContainer }>
      <h1 style={ styles.title } className="amatic">Kaitlyn &amp; Nathan</h1>
      <h2 style={ styles.subTitle }>August 19, 2017</h2>
    </div>
  </div>
);

export default Hero;
