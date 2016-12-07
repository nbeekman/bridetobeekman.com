import React from 'react';
import styles from 'js/components/party/styles/party';

const Party = () => (
  <div id="party" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Party <span>&#187;</span>
    </h2>
    <div style={ styles.partyContentLeft }>
      <h3 style={ styles.partyHeading }>Ceremony</h3>
      <p style={ styles.time }>4:30 PM</p>
      <a href="http://www.botanicgardens.org/" target="_blank" style={ styles.botanicGardens } />
      <p>1007 York St, Denver, CO 80206</p>
    </div>
    <div style={ styles.partyContentRight }>
      <h3 style={ styles.partyHeading }>Reception</h3>
      <p style={ styles.time }>6:00 PM</p>
      <a href="http://www.mossdenver.com/" target="_blank" style={ styles.mossDenver } />
      <p>200 Santa Fe Dr, Denver, CO 80223</p>
    </div>
  </div>
);

export default Party;
