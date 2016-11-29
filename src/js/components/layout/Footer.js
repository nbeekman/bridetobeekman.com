import React from 'react';
import styles from 'js/components/layout/styles/footer';
import Silverton from 'assets/images/silverton.jpg';

const Footer = () => (
  <footer id="footer" style={ Object.assign({ background: `url(${Silverton}) no-repeat center` }, styles.footer) }>
    <p style={ styles.footerText }>Kaitlyn & Nathan &#9829; August 19, 2017</p>
  </footer>
);

export default Footer;
