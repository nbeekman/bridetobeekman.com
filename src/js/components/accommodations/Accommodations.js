import React from 'react';
import styles from 'js/components/accommodations/styles/accommodations';

const Accommodations = () => (
  <div id="accommodations" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Accommodations <span>&#187;</span>
    </h2>
    <div style={ { textAlign: 'center', height: '150px' } }>
      <p>We&#8217;re still scouting out some great spots for everyone to stay at.</p>
      <p>Please stay tuned and we&#8217;ll have more information soon!</p>
    </div>
  </div>
);

export default Accommodations;
