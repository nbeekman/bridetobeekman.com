import React from 'react';
import redrocks from 'assets/images/redrocks.jpg';
import styles from 'js/components/redrocks/styles/redrocks';

const Redrocks = () => (
  <div style={ styles.container }>
    <h1 style={ styles.title } className="amatic">Kaitlyn &amp; Nathan</h1>
    <img src={ redrocks } alt="" style={ styles.image } />
    <p style={ styles.label }>More to come soon!</p>
  </div>
);

export default Redrocks;
