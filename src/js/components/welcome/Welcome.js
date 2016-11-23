import React from 'react';
import styles from 'js/components/welcome/styles/welcome';

const Welcome = () => (
  <div id="welcome" style={ styles.container }>
    <h2 style={ styles.heading }>Welcome</h2>
    <p style={ { height: '1000px' } }>content</p>
  </div>
);

export default Welcome;
