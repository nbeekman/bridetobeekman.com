import React from 'react';
import styles from 'js/components/welcome/styles/welcome';

const Welcome = () => (
  <div id="welcome" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Welcome <span>&#187;</span>
    </h2>
    <p style={ { height: '1000px' } }>content</p>
  </div>
);

export default Welcome;
