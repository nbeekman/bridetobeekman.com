import React from 'react';
import styles from 'js/components/party/styles/party';

const Party = () => (
  <div id="party" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Party <span>&#187;</span>
    </h2>
    <div style={ styles.partyDescr }>
      <p style={ styles.partyDescrText }>Join us for our ceremony and the reception afterwards!</p>
      <p style={ styles.partyDescrText }>Don&#8217;t hesitate in enjoying the gardens for as long as you&#8217;d like in between events.</p>
      <p style={ styles.partyDescrText }>Transportation will be provided from ceremony to reception and will leave promptly at 5:30 PM.</p>
    </div>
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
    <p style={ styles.parking }>If you plan on driving, both locations have limited free parking lots.</p>
  </div>
);

export default Party;
