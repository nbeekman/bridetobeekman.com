import React from 'react';
import styles from 'js/components/layout/styles/footer';
import Silverton from 'assets/images/silverton.jpg';

const Footer = () => (
  <footer id="footer" style={ Object.assign({ background: `url(${Silverton}) no-repeat center` }, styles.footer) }>
    <p style={ styles.footerText }>&#8220;The mountains are calling and I must go.&#8221; <i>John Muir</i></p>
  </footer>
);

export default Footer;
