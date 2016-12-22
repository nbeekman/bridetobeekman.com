import React from 'react';
import styles from 'js/components/ourstory/styles/ourStory';

const OurStory = () => (
  <div id="ourStory" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Our Story <span>&#187;</span>
    </h2>
    <div style={ styles.contentContainer }>
      <div style={ styles.kait } />
      <div style={ styles.contentText }>
        <p>
          Our story began in March 2014 at a party at Nathan&#8217;s in Denver. After a mutual friend and one of Nathan's roommates introduced
          us, we hit it off (Thanks Kelsey!!). Even though we had just met, everyone at the party thought that Kaitlyn was Nathan&#8217;s friend.
          Throughout the next month we became great friends. After seeing each other and hanging out frequently, we both knew it was only a
          matter of time. It was that first fateful evening where the initial sparks flew, and the fire has been burning ever since.
        </p>
      </div>
      <div style={ styles.nate } />
    </div>
    <div style={ styles.kaitNate } />
  </div>
);

export default OurStory;
