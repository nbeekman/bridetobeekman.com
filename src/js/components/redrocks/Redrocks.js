import React from 'react';
import redrocks from 'assets/images/redrocks.jpg';
import styles from 'js/components/redrocks/styles/redrocks';

const Redrocks = () => (
  <div style={ styles.container }>
    <p style={ styles.label }>Website coming soon!</p>
    <img src={ redrocks } alt="" style={ styles.image } />
  </div>
);

export default Redrocks;
