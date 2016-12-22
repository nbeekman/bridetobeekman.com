import React from 'react';
import Redrocks from 'assets/images/redrocks.jpg';
import styles from 'js/components/welcome/styles/welcome';

const Welcome = () => (
  <div id="welcome" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Welcome <span>&#187;</span>
    </h2>
    <div style={ styles.content }>
      <div style={ styles.imgCont }>
        <img src={ Redrocks } alt="" style={ styles.image } />
      </div>
      <div style={ styles.textCont }>
        <p style={ styles.textBottomMargin }>Hello everyone!</p>
        <p style={ styles.textBottomMargin }>
          We cannot wait until August 19 so we can share our special day with you!
          We&#8217;re privileged to have you in our lives and we truly appreciate your love and support.
          And really, we&#8217;re just looking forward to celebrating with all your beautiful faces.
        </p>
        <p style={ styles.text }>Love,</p>
        <p style={ styles.text }>Kaitlyn &amp; Nathan</p>
      </div>
    </div>
  </div>
);

export default Welcome;
