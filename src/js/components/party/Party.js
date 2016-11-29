import React from 'react';
import styles from 'js/components/party/styles/party';

const Party = () => (
  <div id="party" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Party <span>&#187;</span>
    </h2>
    <p style={ { height: '1000px' } }>content</p>
  </div>
);

export default Party;
